// Sample interactivity for toggling sections or alerting headcount
document.addEventListener('DOMContentLoaded', function () {
    const headCount = [
        "Melissa", "Ray", "Gladys", "Mia", "Jayson", 
        "Hanny", "Lily", "Tim", "Steve", "Harry", 
        "Rizza", "Ian", "Ranzel", "Herb", "Karen"
    ];

    console.log("Total Head Count: ", headCount.length);
    alert(`Adventure Plan Confirmed for ${headCount.length} Participants!`);
});
