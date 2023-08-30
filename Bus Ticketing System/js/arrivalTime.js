function arrivalTime(distanceBusTop) {
    // Constants for simulation
    const averageBusSpeed = 30; // kilometers per hour
    const averageWaitTime = 0; // in minutes
  
    // Function to calculate estimated arrival time
    function calculateArrivalTime(distance) {


      const travelTime = distance / averageBusSpeed;
      
      let totalTravelTimeMinutes;
      if (travelTime < 1) {
        totalTravelTimeMinutes = travelTime * 60;
      } else {
        totalTravelTimeMinutes = travelTime * 60;
        totalTravelTimeMinutes = Math.floor(totalTravelTimeMinutes) + Math.ceil((totalTravelTimeMinutes % 1) * 60);
      }
      
      const estimatedArrival = new Date(Date.now() + totalTravelTimeMinutes * 60 * 1000 + averageWaitTime * 60 * 1000);
      return estimatedArrival;
    }
  
    // Calculate arrival time based on the provided distance
    const distanceToBusStop = distanceBusTop; // in kilometers
    const arrivalTime = calculateArrivalTime(distanceToBusStop);
  
    // Format the estimated arrival time
    function formatTime(date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      if (hours >= 1) {
        if (minutes === 0) {
          return `${hours} hour${hours > 1 ? 's' : ''}`;
        } else {
          const formattedHours = hours + minutes / 60;
          return `${formattedHours.toFixed(1)} hours`;
        }
      } else {
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
      }
    }
  
    // Display estimated arrival time
    document.getElementById('arrival').textContent = formatTime(arrivalTime);
  }
  