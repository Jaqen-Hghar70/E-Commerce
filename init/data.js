const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Chipping Campden",
    country: "United Kingdom",
  },
  {
    title: "Coastal Retreat with Pool",
    description:
      "Relax by the private pool in this luxurious coastal retreat. Enjoy breathtaking views of the ocean.",
    image: "https://images.unsplash.com/photo-1522295789110-452e27e0593e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29hc3RhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Gold Coast",
    country: "Australia",
  },
  {
    title: "Elegant Parisian Apartment",
    description:
      "Experience the charm of Paris in this elegant apartment. Perfectly located near all major attractions.",
    image: "https://images.unsplash.com/photo-1598753013344-fecb68fd3eec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Lakeside Cabin with Hot Tub",
    description:
      "Enjoy a relaxing stay in this lakeside cabin complete with a private hot tub and scenic views.",
    image: "https://images.unsplash.com/photo-1532937415451-56e67dbcb8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Big Bear Lake",
    country: "United States",
  },
  {
    title: "Elegant Lakeview Suite",
    description:
      "Relax in style with stunning lake views from this elegant suite. Perfect for a romantic getaway.",
    image: "https://images.unsplash.com/photo-1581204438458-51eb0280f383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrdmV3JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Lake Geneva",
    country: "Switzerland",
  },
  {
    title: "Beachfront Villa with Infinity Pool",
    description:
      "Enjoy stunning ocean views and a private infinity pool at this luxurious beachfront villa.",
    image: "https://images.unsplash.com/photo-1625031625714-fbc4a2d4b246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Luxury Desert Resort",
    description:
      "Experience the serenity of the desert in this luxurious resort. Perfect for those seeking tranquility and luxury.",
    image: "https://images.unsplash.com/photo-1597790856844-6a2cfe2a5acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwcmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Sedona",
    country: "United States",
  },
  {
    title: "Historical Chateau in the Loire Valley",
    description:
      "Discover the beauty of the Loire Valley from this historical chateau. A grand and elegant retreat.",
    image: "https://images.unsplash.com/photo-1556744775-8d76f6e02b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdGVhdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Loire Valley",
    country: "France",
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description:
      "Stay in an overwater bungalow with direct access to crystal-clear waters and stunning coral reefs.",
    image: "https://images.unsplash.com/photo-1598788271222-f7d9fa2a3eec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcndhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Charming Farmhouse in Provence",
    description:
      "Relax in a beautiful farmhouse surrounded by lavender fields and vineyards in the heart of Provence.",
    image: "https://images.unsplash.com/photo-1590265116327-77ffb3d1e3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Provence",
    country: "France",
  },
  {
    title: "Spectacular Mountain Lodge",
    description:
      "Experience the beauty of the mountains from this luxurious lodge with breathtaking views.",
    image: "https://images.unsplash.com/photo-1549697648-0a59f67d847f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Vail",
    country: "United States",
  },
  {
    title: "Private Villa with a Stunning View",
    description:
      "Enjoy a luxurious stay in this private villa with a stunning view of the surrounding landscape.",
    image: "https://images.unsplash.com/photo-1567093120-68dc4e5f8c7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2l0ZSUyMHZpbGxhJTIwd2l0aCUyMHZpZXdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Luxury Villa in Bali",
    description:
      "Experience the beauty of Bali from this luxurious villa with a private pool and stunning views.",
    image: "https://images.unsplash.com/photo-1506748686214e9df14d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Gorgeous Lake House",
    description:
      "Enjoy a relaxing retreat at this gorgeous lake house with beautiful water views and a cozy atmosphere.",
    image: "https://images.unsplash.com/photo-1603446831817-e8a8c71e2a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Lake Placid",
    country: "United States",
  },
  {
    title: "Chic Urban Loft",
    description:
      "Experience city living at its finest in this chic urban loft. A stylish space in a vibrant neighborhood.",
    image: "https://images.unsplash.com/photo-1507554579606-14b5be2d0159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaXQlMjB1cmJhbiUyMGxvZnQlMjBhcHBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Secluded Beachside Villa",
    description:
      "Enjoy a tranquil stay at this secluded beachside villa with direct access to the beach.",
    image: "https://images.unsplash.com/photo-1525187453614-9a0e1c45b6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hzaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Stylish Apartment in Tokyo",
    description:
      "Enjoy modern living in this stylish apartment located in the heart of Tokyo. Ideal for exploring the city.",
    image: "https://images.unsplash.com/photo-1602586880581-6e3f29c3fd04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Historic Mansion in Charleston",
    description:
      "Step back in time with a stay in this historic mansion in the charming city of Charleston.",
    image: "https://images.unsplash.com/photo-1576086933794-35b46b946a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Retreat in the Forest",
    description:
      "Escape the city in this modern retreat nestled in the forest. Perfect for a peaceful getaway.",
    image: "https://images.unsplash.com/photo-1543322587-9b5cce49b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Luxury Mansion in Los Angeles",
    description:
      "Experience luxury living in this stunning mansion with top-notch amenities and beautiful city views.",
    image: "https://images.unsplash.com/photo-1511695298228-582b8e2ac9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFyZ2UlbmV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Secluded Cottage in the Countryside",
    description:
      "Relax in this cozy and secluded cottage in the peaceful countryside, away from the hustle and bustle of city life.",
    image: "https://images.unsplash.com/photo-1552088503-9cba0030d529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VjbG9kZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Kent",
    country: "United Kingdom",
  },
  {
    title: "Luxurious Yacht Experience",
    description:
      "Enjoy a luxurious stay on a private yacht with all the amenities you could ask for.",
    image: "https://images.unsplash.com/photo-1569479172-52a14e07d0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFjaHQtcmVudGFsJTIwd2l0aCUyMHlpZHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 7500,
    location: "Monaco",
    country: "Monaco",
  },
  {
    title: "Penthouse with Rooftop Terrace",
    description:
      "Enjoy stunning city views from the rooftop terrace of this luxurious penthouse apartment.",
    image: "https://images.unsplash.com/photo-1563232589-76b6b7245fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Charming Cabin in the Woods",
    description:
      "A cozy cabin in the woods for a relaxing and secluded escape from daily life.",
    image: "https://images.unsplash.com/photo-1556742527-5b49f9f3c9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Upstate New York",
    country: "United States",
  },
  {
    title: "Modern Loft with Artistic Decor",
    description:
      "Enjoy a stay in this modern loft decorated with artistic touches and stylish furnishings.",
    image: "https://images.unsplash.com/photo-1548050268-f7117e68b0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Elegant Villa in the Mediterranean",
    description:
      "A luxurious villa with stunning Mediterranean views and all the amenities for a perfect getaway.",
    image: "https://images.unsplash.com/photo-1550497028-1b05e1db712c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRlcnJhbmVhbiUyMHZpbGxhJTIwd2l0aCUyMHZpZXdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Mallorca",
    country: "Spain",
  },
  {
    title: "Private Oasis in the Desert",
    description:
      "Experience a luxurious and private oasis in the heart of the desert with stunning views and top-notch amenities.",
    image: "https://images.unsplash.com/photo-1627395680547-96b4fe46e550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwb2FzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Joshua Tree",
    country: "United States",
  },
  {
    title: "Luxury Condo in Miami",
    description:
      "Enjoy a luxurious stay in this modern condo with stunning city views and top-of-the-line amenities.",
    image: "https://images.unsplash.com/photo-1548363049-cb2c87283d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9uJTIwY29uZG8lMjBpbiUyME1pYW1pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Elegant Mansion in Rome",
    description:
      "Experience opulence and history in this elegant mansion located in the heart of Rome.",
    image: "https://images.unsplash.com/photo-1596887865564-c7e6103be155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Stunning Coastal Villa",
    description:
      "A luxurious coastal villa with breathtaking views of the ocean and all the comforts for a perfect stay.",
    image: "https://images.unsplash.com/photo-1593642532792-0f0d51c58b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hc3RhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Amalfi Coast",
    country: "Italy",
  },
  {
    title: "Private Island Getaway",
    description:
      "Escape to a private island for an exclusive and luxurious vacation experience.",
    image: "https://images.unsplash.com/photo-1611191219284-6c27c6d9c4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMGxhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Luxury Chalet in the Swiss Alps",
    description:
      "Experience the charm of the Swiss Alps from this luxurious chalet with stunning mountain views.",
    image: "https://images.unsplash.com/photo-1548503561-9e03444b9d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN3aXMlMjBhbHBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Modern Beach House",
    description:
      "A modern and stylish beach house with beautiful ocean views and direct access to the beach.",
    image: "https://images.unsplash.com/photo-1561001482-3c44663aa665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Bondi Beach",
    country: "Australia",
  },
  {
    title: "Rustic Cabin in the Mountains",
    description:
      "A cozy rustic cabin in the mountains for a peaceful retreat surrounded by nature.",
    image: "https://images.unsplash.com/photo-1548696938-f1b63b27fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVzdGljJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Contemporary Villa in Barcelona",
    description:
      "A contemporary villa in Barcelona with modern amenities and a beautiful city view.",
    image: "https://images.unsplash.com/photo-1612406867574-1d9b0298b701?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFybjElMjB2aWxsYSUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Sophisticated Loft in New York City",
    description:
      "A sophisticated loft in New York City with stylish decor and breathtaking city views.",
    image: "https://images.unsplash.com/photo-1599304062054-e3b10f790f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdC1saWZlJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3800,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Grand Villa in the South of France",
    description:
      "A grand and luxurious villa in the South of France, offering exquisite amenities and beautiful surroundings.",
    image: "https://images.unsplash.com/photo-1556743287-15d9e9c1d519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Côte d'Azur",
    country: "France",
  },
  {
    title: "Scenic Vineyard Retreat",
    description:
      "A scenic retreat located in a picturesque vineyard, perfect for wine lovers and nature enthusiasts.",
    image: "https://images.unsplash.com/photo-1589526307836-0ef7c6df9d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbmV5YXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Modern Penthouse in Singapore",
    description:
      "A modern penthouse in Singapore with stunning city views and luxurious amenities.",
    image: "https://images.unsplash.com/photo-1572267963199-69f926d0c519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4200,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Opulent Mansion in Dubai",
    description:
      "Experience unparalleled luxury in this opulent mansion located in the heart of Dubai.",
    image: "https://images.unsplash.com/photo-1599419700848-4ea58a5efc37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbmNpbyUyMGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 8000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Elegant Castle in Scotland",
    description:
      "A grand and elegant castle experience in the picturesque landscape of Scotland.",
    image: "https://images.unsplash.com/photo-1602673218685-8c7b546870a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlJTIwc2NvdGxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Scotland",
    country: "United Kingdom",
  },
  {
    title: "Elegant Townhouse in Paris",
    description:
      "A chic and elegant townhouse located in the heart of Paris, perfect for exploring the city.",
    image: "https://images.unsplash.com/photo-1602092690654-9939d799c6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bm91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Beachfront Property in Bali",
    description:
      "A stunning beachfront property in Bali offering direct access to the pristine beaches and luxurious amenities.",
    image: "https://images.unsplash.com/photo-1542442935-d7799d2d80dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Bali",
    country: "Indonesia",
  },
];

module.exports = { data: sampleListings };