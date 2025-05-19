let games = [
    { id: "1", title: "Elder Ring", platform: ["PC", "PS5"] },
    { id: "2", title: "Zelda: Breath of the Wild", platform: ["Switch"] },
    { id: "3", title: "God of War: Ragnarok", platform: ["PS5"] },
    { id: "4", title: "Halo Infinite", platform: ["Xbox", "PC"] },
    { id: "5", title: "Minecraft", platform: ["PC", "Mobile", "Console"] }
]

let authors = [
    { id: "1", name: "Alice Johnson", verified: true },
    { id: "2", name: "Bob Smith", verified: false },
    { id: "3", name: "Charlie Zhang", verified: true }
]

let reviews = [
    { id: "1", rating: 9, content: "Amazing game with immersive world.", author_id: "1", game_id: "1" },
    { id: "2", rating: 8, content: "Great storyline and combat.", author_id: "2", game_id: "2" },
    { id: "3", rating: 7, content: "Good but has performance issues.", author_id: "3", game_id: "3" },
    { id: "4", rating: 10, content: "Masterpiece. A must-play!", author_id: "1", game_id: "4" },
    { id: "5", rating: 6, content: "Fun at first, but gets repetitive.", author_id: "2", game_id: "5" },
    { id: "6", rating: 5, content: "Too many bugs, needs patches.", author_id: "3", game_id: "1" },
    { id: "7", rating: 9, content: "Visually stunning and engaging.", author_id: "1", game_id: "3" }
]

export default { games, authors, reviews }