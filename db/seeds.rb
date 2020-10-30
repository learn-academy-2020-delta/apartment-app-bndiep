# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = [
    {
        email: "test@test.com",
        password: "testing",
        password_confirmation: "testing"
    }
]

user.each do |attribute|
    User.create attribute
end

apartments = [
    {
        street: "221B Baker St",
        city: "London",
        state: "UK",
        manager: "Ms. Hudson",
        email: "ms-hud@uk.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no"
    },
    {
        street: "32 Windsor Gardens",
        city: "London",
        state: "UK",
        manager: "Paddington Bear",
        email: "marmalade4life@mail.com",
        price: "1500",
        bedrooms: 4,
        bathrooms: 2,
        pets: "yes"
    },
    {
        street: "186 Fleet Street",
        city: "London",
        state: "UK",
        manager: "Sweeney Todd",
        email: "no1barber1756@mail.com",
        price: "2500",
        bedrooms: 2,
        bathrooms: 1,
        pets: "yes"
    }
]

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
    puts "creating apartment: #{ attribute }"
end