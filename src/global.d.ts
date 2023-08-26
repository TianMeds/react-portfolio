// Extend the Window interface to include your functions
interface Window {
    validateForm?: () => boolean;
    handleFormSubmit?: (event: Event) => void;
  }
  