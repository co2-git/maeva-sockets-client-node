import Socket from 'ws';
import Client from 'maeva-sockets-client';

export default class MaevaSockets_NodeClient extends Client {
  constructor(url) {
    super(new Socket(url));
  }
}
