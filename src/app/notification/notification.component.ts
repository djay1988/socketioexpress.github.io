import { Component, OnInit } from '@angular/core';
import { Notification } from '../__models/Notification';
import { SocketIOService } from '../__services/socket-io.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private socket: SocketIOService) { }

  items = [];
  text: string;

  ngOnInit(): void {
    this.socket.onNotify().subscribe(data => {
      this.items.push(data);
    })
  }


  notifyNow() {
    let n = new Notification();
    n.text = this.text;
    this.socket.notify(n);
  }

}
