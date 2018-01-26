import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  test = 'Houdini';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) { }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

}
