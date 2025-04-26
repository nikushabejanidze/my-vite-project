import './App.css'
import UserCard from './components/UserCard'
import MyAdvertisment from './components/MyAdvertisment'

// - App კომპონენტი, რომელიც მოთავსებულია შესაბამისი დასახელების ფაილში (App.jsx)
// - ფუნქცია App-მა უნდა დააბრუნოს ერთი ელემენტი
// - ამ შემთხვევაში ეს არის ფრაგმენტი (<>), რომელიც არ არის ხილვადი ბრაუზერში
// - რადგან jsx ფაილში დაიმპორტებულია App.css ფაილი, მასში განსაზღვრული სტილიც
// იმოქმედებს დაბრუნებულ სტრუქტურაზე

function App() {

  return (
    <>
      {/* ფიგურულ ფრჩხილებში იხსნება JS გარემო, ასე იწერება კომენტარი */}
      {/* inline სტილის ჩასმა jsx-ში ხდება თავისებურად, ობიექტის სახით */}
      {/* სტილის property-ები წარმოდგენილია camelCase ფორმით */}
      <h1 style={{color: "white", backgroundColor: "black", textAlign: "center"}}>
        Hello World
      </h1>
      {/*  
          br თეგი არის void, სტანდარტული html-ისგან განსხვავებით
          jsx-ში ასეთი void თეგები ყოველთვის უნდა დაიხუროს "/" სიმბოლოთი
      */}
      <br/>
      <h2></h2>
      <MyAdvertisment/>
      <div className='card-container'>
        <UserCard firstName="გიორგი" lastName="ბერიძე" age={28} country="საქართველო" city="თბილისი" />
        <UserCard firstName="ლაშა" lastName="ბერიძე" age={22} country="საქართველო" city="ქუთაისი" />
        <UserCard firstName="ანა" lastName="დავითაძე" age={28} country="საქართველო" city="ბათუმი" />
        <UserCard firstName="მარიამ" lastName="ჩხარტიშვილი" age={12} country="საქართველო" city="ბათუმი" />
      </div>
      
    </>
  )
}

export default App
