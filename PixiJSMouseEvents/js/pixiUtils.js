// rotate so that subject is facing towards target returns angle
function faceTowards(subject, target) {
    deltaX = target.x - subject.x;
    deltaY = target.y - subject.y;
    angle = Math.atan2(deltaY, deltaX);
    subject.rotation = angle;
}

// move subject hbased on an angle
function moveTo(subject, dir, speed = 1) {
    subject.x += Math.cos(dir) * speed;
    subject.y += Math.sin(dir) * speed;
}

// checks to see if a has collided with b and returns a bool
function rectIntersect(a, b) {

    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
           aBox.x < bBox.x + bBox.width &&
           aBox.y + aBox.height > bBox.y &&
           aBox.y < bBox.y + bBox.height;
}

// checks to see if subject is on screen or not
function isOnScreen(subject) {
    if (subject.x < 0 || subject.x > window.screen.width || subject.y < 0 || subject.y > window.screen.height) {
        return false;
    } else {
        return true;
    }
}