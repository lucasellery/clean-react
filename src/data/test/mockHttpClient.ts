import { HttpPostClient } from '../protocols/http/httpPostClient';

export class HttpPostClientSpy implements HttpPostClient { //captura valores para comparar
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}