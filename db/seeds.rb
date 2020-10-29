# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
apartments = [
    {
        id: 1,
        street: "221B Baker St",
        city: "London",
        state: "UK",
        manager: "Ms. Hudson",
        email: "ms-hud@uk.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no",
        user_id: 1
    },
    {
        id: 2,
        street: "32 Windsor Gardens",
        city: "London",
        state: "UK",
        manager: "Paddington Bear",
        email: "marmalade4life@mail.com",
        price: "1500",
        bedrooms: 4,
        bathrooms: 2,
        pets: "yes",
        user_id: 1
    },
    {
        id: 3,
        street: "186 Fleet Street",
        city: "London",
        state: "UK",
        manager: "Sweeney Todd",
        email: "no1barber1756@mail.com",
        price: "2500",
        bedrooms: 2,
        bathrooms: 1,
        pets: "yes",
        user_id: 2
    }
]

apartments.each do |attributes|
    Apartment.create attributes
    puts "creating apartment #{ attributes }"
end