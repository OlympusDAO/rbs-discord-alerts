export const handler = async (): Promise<void> => {
  // Get last processed block
  // Fetch events since the last processed block
  // Send Discord message
  // Update last processed block
};

// Running via CLI
if (require.main === module) {
  handler();
}
