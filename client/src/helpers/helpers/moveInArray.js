// Move the value at a new index inside the array
export const moveInArray = ({ array, oldIndex, newIndex }) => {
  if (newIndex >= 0 && newIndex < array?.length) {
    const saveValue = array[oldIndex]; // Save the value
    array.splice(oldIndex, 1); // Delete the value at his oldIndex
    array.splice(newIndex, 0, saveValue); // Add the value at his newIndex
  }
};
