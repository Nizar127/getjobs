import PushNotification from 'react-native-push-notification';

class NotificationManager {
    configure = (onRegister, onNotification, onOpenNotification, senderID) => {
        PushNotification.configure({
            onRegister: function (token) {
                onRegister(token)
                console.log("[NotificationManager] onRegister token:", token);

            },

            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);

                //process the notification
                if (Platform.OS === 'ios') {
                    if (notification.data.openedInForeground) {
                        notification.userInteraction = true
                    }
                } else {
                    notification.userInteraction = true
                }

                if (notification.userInteraction) {
                    onOpenNotification(notification)
                } else {
                    onNotification(notification)
                }

                if (Platform.OS === 'android') {
                    notification.userInteraction = true
                }

                //only call callback if not from foreground (user opne the app)
                if (Platform.OS === 'ios') {
                    if (!notification.data.openedInForeground) {
                        notification.finish('backgroundFetchResultNoData')
                    }
                } else {
                    notification.finish('backgroundFetchResultNoData')
                }
            },
            senderID: senderID,
            //android only

        })
    }

    _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || 'high',
            data: data,
            senderID: "Your"
        }
    }

    // _buildIOSNotification = (id, title, message, data={}, options ={}) => {
    //     return{
    //         alertAction: options.alertAction || "view",
    //         category: options.category || "",
    //         userInfo: {
    //             id: id,
    //             item: data
    //         }
    //     }
    // }

    showNotification = (id, title, message, data = {}.options = {}) => {
        PushNotification.localNotification({
            ...this._buildAndroidNotification(id, title, message, data, options),
            title: title || "", // (optional)
            message: message || "", // (required)
            playSound: options.playSound || false, // (optional) default: true
            soundName: options.soundName || "default", // (optional) default:", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
            userInteraction: false
            //actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more

        })
    }

    cancelAllNotifications = () => {
        if (Platform.OS === 'ios') {
            PushNotification.removeAllDeliveredNotifications()
        } else {
            PushNotification.cancelAllLocalNotifications()
        }
    }

    unregister = () => {
        PushNotification.unregister()
    }
}

export const notificationManager = new NotificationManager()