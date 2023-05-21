import React from 'react'
import useSWR  from  'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Products = () => {
  const router=useRouter();
  const category = router.query.category
  const fetcher =async()=>{
    try{

      let {data}=await axios.get("https://rs-server-18ld.onrender.com/api/product")

      return data.filter(d=> d.category===category)
    }catch(error){
      console.log(error.message)
    }
  }
  const { data, error, isLoading } = useSWR('products', fetcher)

  console.table(data)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
      <div className="container my-3">
        {
          data && data.length!=0 &&

        <div className="row">
          {
            data?.map(p=>(
              <div className="col-sm-12 col-md-6 col-lg-4 my-2" key={p._id}>
                    <div className="card shadow" style={{width:"18rem"}}>
                        <Image src={p.image} className="card-img-top" height={170} width={120} alt={p.name}/>
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                        </div>
                  </div>
              </div>
            ))
          }
        </div>
}
      </div>
  )
}

export default Products
