function distanceFromHqInBlocks(destination) {
    return Math.abs(42-destination);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(destination) {
    const feet = distanceFromHqInBlocks(destination) * 264;
    return feet;

}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    const blocksToFeet = Math.abs(start - destination) * 264;
    return blocksToFeet;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance >= 2500){
        return `cannot travel that far`
    }
    if (distance >= 2000 && distance < 2500) {
        return 25;
    }
    if (distance <= 400) {
        return 0;
    }
    return (distance - 400) * .02;
}
calculatesFarePrice();