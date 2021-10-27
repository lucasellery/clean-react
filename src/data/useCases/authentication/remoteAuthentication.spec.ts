class RemoteAuthentication {
  constructor(private readonly url: string) 


  async auth(): Promise<void> {
    return Promise.reolve()
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = "any_url"
    const httpClient = { post: jest.fn() }
    const sut = new RemoteAuthentication(url)
    await sut.auth()

    expect(httpClient.url).toBe(url)
  });
})
