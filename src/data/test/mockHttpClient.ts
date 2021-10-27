import {
  HttpPostClient,
  HttpPostParams,
} from "../protocols/http/httpPostClient";

export class HttpPostClientSpy implements HttpPostClient {
  //captura valores para comparar
  url?: string;
  body?: object;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
