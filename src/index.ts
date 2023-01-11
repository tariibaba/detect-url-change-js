import EventEmitter from 'events';

declare interface UrlChangeEvent {
  on(event: 'change', listener: (newUrl: string) => void): this;
  addEventListener(event: 'change', listener: (newUrl: string) => void): this;
  off(event: 'change', listener: (newUrl: string) => void): this;
  removeEventListener(
    event: 'change',
    listener: (newUrl: string) => void
  ): this;
}

class UrlChangeEvent extends EventEmitter {}

const interval = 60;
const emitter = new UrlChangeEvent();

let lastUrl;
setInterval(() => {
  let currUrl = window.location.href;
  if (currUrl != lastUrl) {
    emitter.emit('change', currUrl);
    lastUrl = currUrl;
  }
}, interval);

export default emitter;
