export async function getEndpointFecth(url) {
  return fetch(url).then(res => res.json()).then(res => res)
}
