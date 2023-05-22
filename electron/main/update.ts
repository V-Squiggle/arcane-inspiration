/* eslint-disable @typescript-eslint/no-empty-function */
import { app, ipcMain } from 'electron'
import {
	type ProgressInfo,
	type UpdateDownloadedEvent,
	autoUpdater,
} from 'electron-updater'

export function update(win: Electron.BrowserWindow) {
	// When set to false, the update download will be triggered through the API
	autoUpdater.autoDownload = false
	autoUpdater.disableWebInstaller = false
	autoUpdater.allowDowngrade = false

	// start check
	autoUpdater.on('checking-for-update', function () {})
	// update available
	autoUpdater.on('update-available', (arg) => {
		win.webContents.send('update-can-available', {
			newVersion: arg?.version,
			update: true,
			version: app.getVersion(),
		})
	})
	// update not available
	autoUpdater.on('update-not-available', (arg) => {
		win.webContents.send('update-can-available', {
			newVersion: arg?.version,
			update: false,
			version: app.getVersion(),
		})
	})

	// Checking for updates
	ipcMain.handle('check-update', async () => {
		if (!app.isPackaged) {
			const error = new Error(
				'The update feature is only available after the package.',
			)
			return {
				error,
				message: error.message,
			}
		}

		try {
			return await autoUpdater.checkForUpdatesAndNotify()
		} catch (error) {
			return {
				error,
				message: 'Network error',
			}
		}
	})

	// Start downloading and feedback on progress
	ipcMain.handle('start-download', (event) => {
		startDownload(
			(error, progressInfo) => {
				if (error) {
					// feedback download error message
					event.sender.send('update-error', {
						error,
						message: error.message,
					})
				} else {
					// feedback update progress message
					event.sender.send('download-progress', progressInfo)
				}
			},
			() => {
				// feedback update downloaded message
				event.sender.send('update-downloaded')
			},
		)
	})

	// Install now
	ipcMain.handle('quit-and-install', () => {
		autoUpdater.quitAndInstall(false, true)
	})
}

function startDownload(
	callback: (error: Error | null, info: ProgressInfo | null) => void,
	complete: (event: UpdateDownloadedEvent) => void,
) {
	autoUpdater.on('download-progress', (info) => callback(null, info))
	autoUpdater.on('error', (error) => callback(error, null))
	autoUpdater.on('update-downloaded', complete)
	autoUpdater.downloadUpdate()
}
