class newElement extends HTMLElement {
    trigger(eventName, eventDetails) {
    return new CustomEvent(eventName, eventDetails);
    }
    }
    customElements.define('new-element', newElement);
    let myNewElement = document.createElement('new-element');
    const haha = myNewElement.trigger('new-event', {detail: {data: 1}});
    myNewElement.addEventListener('new-event', (event) => {
        console.log(event.detail);
});
myNewElement.addEventListener('new-event', () => {
document.createElement('div');
});