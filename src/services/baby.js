const DOMAIN = 'http://localhost:5000/v1'

const URI_getList = `${DOMAIN}/baby/list`

const Service = {}

Service.getBabyList = async () => {
  const res = await fetch(URI_getList)
  let data = {}
  if (res.ok) {
    data = await res.json()
  }
  return data
}

export default Service