import React from 'react'
import useSWR  from  'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/category.module.scss'
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
      <div className={`${styles.container} `}>
        {
          data && data.length!=0 &&
          <>
        <h1  className='p-4'>{category}</h1>
        <h2 className='px-4 p-2'>Total Products - {data.length}</h2>
        <div className={styles.productList}>
          {
            data?.map(p=>(

                    <div className={`${styles.productcard} card shadow`} key={p._id} style={{width:"18rem"}}>
                        <Image src={p.image} className="card-img-top" height={200} width={120} alt={p.name}/>
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                        </div>
                  </div>

            ))
          }
        </div>
        </>
}
      </div>
  )
}

export default Products
