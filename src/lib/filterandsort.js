export const filterAndSortData = (data) => {
    return data
      .filter(item => item.enabled) // Filter based on enabled field
      .sort((a, b) => a.sequence - b.sequence); // Sort based on sequence field
  };