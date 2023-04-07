import toast, { Toaster } from "react-hot-toast"; // Library for alert message

// REF: https://react-hot-toast.com/docs

// Success alert
export const alertSuccess = ({ message }) => toast.success(message);

// Error alert
export const alertSoon = () => toast.error("Action available soon");
export const alertError = ({ message }) => toast.error(message);

// Loading alert
export const alertLoading = () => toast.loading("Loading");

// Custom alert
export const alertCustom = () => toast.custom("Custom");

// Alert message
export function Alert() {
  return (
    <Toaster
      position="bottom-right" // Position
      reverseOrder={false} // From down to up
      gutter={10} // Space between each alert
      containerClassName=""
      containerStyle={{ bottom: 20 }} // Modify the container
      toastOptions={{
        // Default options
        className: "",
        duration: 3500,
        style: {
          background: "white",
          color: "black",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, .25)",
        },
        // Success options
        success: {
          iconTheme: {
            primary: "#3ba27a",
            secondary: "white",
          },
        },
        // Error options
        error: {
          iconTheme: {
            primary: "#ff6d6d",
            secondary: "white",
          },
        },
        // Loading options
        loading: {},
        // Custom options
        custom: {},
      }}
    />
  );
}
