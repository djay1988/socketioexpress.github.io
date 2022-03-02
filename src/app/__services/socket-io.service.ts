import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Notification } from '../__models/Notification';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  constructor(private socket: Socket) { }


  notify(notify: Notification) {
    this.socket.emit('notify', notify);
  }

  onNotify() {
    return this.socket.fromEvent('notify');
  }
}
