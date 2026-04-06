'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [products, setProducts] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)

  const API_BASE = "http://localhost:8000"
  const USER_ID = "demo-user-123"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prodRes = await fetch(`${API_BASE}/products`)
        const prodData = await prodRes.json()
        setProducts(prodData)

        const recRes = await fetch(`${API_BASE}/recommendations/${USER_ID}`)
        const recData = await recRes.json()
        setRecommendations(recData)
      } catch (err) {
        console.error("Backend connection failed, using mock data", err)
        // Fallback for demo
        const mock = [
          { _id: '1', name: 'Aura Glow Watch', price: 199.99, image_url: '/images/gadget_watch_premium.png' },
          { _id: '2', name: 'Nebula Headphones', price: 299.99, image_url: '/images/headphones.jpg' },
        ]
        setProducts(mock)
        setRecommendations(mock)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const trackInteraction = async (productId, action) => {
    try {
      await fetch(`${API_BASE}/interactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: USER_ID, product_id: productId, action })
      })
    } catch (err) {
      console.log("Tracking interaction failed locally.")
    }
  }

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="glass" style={{ padding: '4rem', marginTop: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 900 }}>Revolutionizing Retail.</h1>
        <p style={{ color: '#a0a0a0', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Discover the future of shopping with AuraCart. Personalized by AI, crafted for excellence.
        </p>
        <button className="btn btn-primary" style={{ fontSize: '1.2rem' }}>Explore Collection</button>
      </section>

      {/* Recommended For You */}
      <h2 style={{ marginTop: '4rem', fontSize: '2rem' }}>Personalized for <span className="gradient-text">You.</span></h2>
      <div className="product-grid">
        {recommendations.map(p => (
          <div key={p._id} className="product-card glass" onClick={() => trackInteraction(p._id, 'view')}>
            <div className="product-image gradient-bg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontSize: '5rem' }}>⌚</span>
            </div>
            <h3 className="product-title">{p.name}</h3>
            <p className="product-price">${p.price}</p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={(e) => { e.stopPropagation(); trackInteraction(p._id, 'add_to_cart') }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* All Products */}
      <h2 style={{ marginTop: '2rem', fontSize: '2rem' }}>Featured <span className="gradient-text">Gadgets.</span></h2>
      <div className="product-grid">
        {products.map(p => (
          <div key={p._id} className="product-card glass">
            <div className="product-image gradient-bg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontSize: '5rem' }}>🎧</span>
            </div>
            <h3 className="product-title">{p.name}</h3>
            <p className="product-price">${p.price}</p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
