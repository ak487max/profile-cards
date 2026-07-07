import React from 'react'
import Card from './components/card'
const App = () => {
    const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "₹12 LPA",
    location: "Bangalore",
  },
  {
    id: 2,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
    companyName: "Microsoft",
    post: "Backend Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "₹18 LPA",
    location: "Hyderabad",
  },
  {
    id: 3,
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Fresher",
    pay: "₹16 LPA",
    location: "Pune",
  },
  {
    id: 4,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgIpwOvOEBLHGvkl3Nv-9ZlAYyxFDDu68yVdXREoQMq7MeCcQmMj1oSq3&s=10",
    companyName: "Netflix",
    post: "UI/UX Designer",
    tag1: "Hybrid",
    tag2: "Senior",
    pay: "₹28 LPA",
    location: "Mumbai",
  },
  {
    id: 5,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVByitatwVy2dZAVZOj2VNNhuoWzNrRZbBOfORmn5nzg&s",
    companyName: "Apple",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹24 LPA",
    location: "Bangalore",
  },
  {
    id: 6,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDbGWS5_ZukEOuxyL-U1UE3JkQDIeTNaA6DfDim8Yy1oC6V1po5laBJI&s=10",
    companyName: "Adobe",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior",
    pay: "₹14 LPA",
    location: "Noida",
  },
  {
    id: 7,
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "₹35 LPA",
    location: "Gurgaon",
  },
  {
    id: 8,
    brandLogo: "https://media.designrush.com/inspiration_images/757502/conversions/BDA-desktop.jpg",
    companyName: "Spotify",
    post: "Mobile App Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "₹22 LPA",
    location: "Remote",
  },
  {
    id: 9,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5K0su64SNN6n7gWZ4kF-hEqVLvYKJ7R7w2pzJuRcvyAV0yJxCcVeBfbS&s=10",
    companyName: "Tesla",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "₹40 LPA",
    location: "California",
  },
  {
    id: 10,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfTAK5qJzWjHHnR9BHkxgRLD3qgti6l4igm4Pqdm4Q&s",
    companyName: "Airbnb",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "₹20 LPA",
    location: "Delhi",
  },
];

  return (
    <div className='parent'>
       {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}/>
       </div>
       })}
    </div>
  )
}

export default App
