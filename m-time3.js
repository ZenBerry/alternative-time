function convertToModifiedTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the modified time values
  const usualMilliseconds = currentDate.getMilliseconds();
  const modifiedMilliseconds = Math.floor((usualMilliseconds / 1000) * 864); // Adjust the length of seconds

  const usualSeconds = currentDate.getSeconds();
  const modifiedSeconds = Math.floor((usualSeconds / 60) * 1440); // Convert to 25-hour format

  const usualMinutes = currentDate.getMinutes();
  const modifiedMinutes = usualMinutes;

  const usualHours = currentDate.getHours();
  const modifiedHours = Math.floor((usualHours / 24) * 25); // Convert to 25-hour format

  // Display the modified time
  console.log(`${modifiedHours}:${modifiedMinutes}:${modifiedSeconds}:${modifiedMilliseconds}`);
}

// Call the function every second
setInterval(convertToModifiedTime, 1000);
