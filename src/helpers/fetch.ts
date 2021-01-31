const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

export default async function Fetch(endpoint: string, params?: any[], customHeaders?: any[]) {
  const login = `${username}:${token}`
  const buffer = Buffer.from(login)
  const headers = {
    Authorization: `Basic ${buffer.toString('base64')}`,
    ...customHeaders,
  }
  const response = await fetch(endpoint, { method: 'GET', headers, ...params })
  return response
}
