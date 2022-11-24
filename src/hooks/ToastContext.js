import React from "react";
import NotificationSystem from "react-notification-system";

const style = {
  NotificationItem: {
    // Override the notification item
    DefaultStyle: {
      // Applied to every notification, regardless of the notification level
      backgroundColor: "rgb(42, 42, 42)",
    },
  },
  Title: {
    DefaultStyle: {
      fontWeight: "600",
    },
  },
};

export const ToastContext = React.createContext({});

export const ToastProvider = ({ children }) => {
  const notificationSystem = React.createRef();

  const _success = (provided) =>
    _addToast(provided, { title: "Record Saved", level: "success" });

  const _error = (provided) =>
    _addToast(provided, {
      title: "Failed to Save Record",
      level: "error",
      autoDismiss: 0,
    });

  const _warn = (provided) =>
    _addToast(provided, {
      title: "Notice!",
      level: "warning",
      autoDismiss: 0,
    });

  const _addToast = (provided, defaultOptions) => {
    const providedOptions =
      typeof provided === "string" ? { title: provided } : provided;

    return notificationSystem.current.addNotification({
      ...defaultOptions,
      ...providedOptions,
    });
  };

  const _clear = () => notificationSystem.current.clearNotifications();

  const _remove = (notification) =>
    notificationSystem.current.removeNotification(notification);

  return (
    <ToastContext.Provider
      value={{
        success: _success,
        warn: _warn,
        error: _error,
        clear: _clear,
        remove: _remove,
      }}
    >
      {children}
      <NotificationSystem ref={notificationSystem} style={style} />
    </ToastContext.Provider>
  );
};
