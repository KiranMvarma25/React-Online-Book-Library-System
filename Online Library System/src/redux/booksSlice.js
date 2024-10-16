import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name : "cart",
    initialState : {
        books : [

            {
                id : 1,
                title : "Dracula",
                author : "Bram Stoker",
                publishedDate : "26 May 1897",
                pages : 418,
                coverImage : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7CgG5r4yT6h42Wfbryij50dlJiJdJ7zqFKbZF1O_3aXp57jwp",
                description : "Dracula became regarded as a seminal piece of gothic fiction. Modern scholars explore the novel within its historical context—the Victorian era—and discuss its depiction of gender roles, sexuality, and race Dracula is one of the most famous pieces of English literature. Many of the book's characters have entered popular culture as archetypal versions of their characters; for example, Count Dracula as the quintessential vampire, and Van Helsing as an iconic vampire hunter. The novel, which is in the public domain, has been adapted for film over 30 times, and its characters have made numerous appearances in virtually all media.",
                category : "Horror",
                rating : "4.8 / 5",
            },

            {
                id : 2,
                title : "The Road Ahead",
                author : "Bill Gates",
                publishedDate : "November 24, 1995",
                pages : 286,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Road_Ahead_%28Bill_Gates_book%29.jpg",
                description : "The Road Ahead is a book written by Bill Gates, co-founder and former CEO of Microsoft; Nathan Myhrvold, Microsoft executive; and former Microsoft vice president Peter Rinearson. Published in November 1995, then substantially revised about a year later, The Road Ahead summarized the implications of the personal computing revolution and described a future profoundly changed by the arrival of a global information superhighway.Gates received a $2.5-million advance for his book and money from subsidiary rights sales;[2] all his proceeds were donated to encourage the use of technology in education administered through the National Foundation for the Improvement of Education,a foundation created by the National Education Association.[4].",
                category : "Biography",
                rating : "4.8 / 5",
            },

            {
                id : 3,
                title : "It",
                author : "Stephen King",
                publishedDate : "September 15, 1986",
                pages : 1138,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg/330px-It_%281986%29_front_cover%2C_first_edition.jpg",
                description : "During a rainstorm in Derry, Maine, a six-year-old boy named Georgie Denbrough sails a paper boat along the rainy streets before it washes down into a storm drain. Looking in the drain, Georgie encounters a clown who introduces himself as Pennywise the Dancing Clown. Georgie, despite knowing he should not talk to strangers, is enticed by Pennywise to reach into the drain and retrieve his boat. It then rips his arm off, and Georgie dies. The following June, an overweight eleven-year-old boy named Ben Hanscom is harassed by a bully named Henry Bowers and his gang on the last day of school, escaping into the marshy wasteland known as the Barrens. There, Ben befriends an asthmatic hypochondriac named Eddie Kaspbrak and Stuttering Bill Denbrough, Georgie's elder brother. .",
                category : "Horror",
                rating : "4.8 / 5",
            },

            {
                id : 4,
                title : "The Night Circus",
                author : "Erin Morgenstern",
                publishedDate : "2011",
                pages : 387 ,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/c/c5/TheNightCircus.jpg",
                description : "The Night Circus is a phantasmagorical fairy tale set near an ahistorical Victorian London in a wandering, magical circus that is open only from sunset to sunrise. Le Cirque des Rêves (The Circus of Dreams) features exhibitions such as illusionists, fortune-tellers, and attractions that defy the laws of physics and reality. The circus has no set schedule, appearing and disappearing in random cities and towns without warning. The circus is powered by real magic, with performers frequently pulling off feats that seem impossible to spectators. In addition to showcasing the world's best magical talent, the circus acts as a sparring ground for the protégés of two powerful magicians. The world-class illusionist Prospero the Enchanter and the enigmatic Mr. A. H.— agree to each raise and train a young magician, who will eventually face off against the other in a battle of wills and magic.",
                category : "Fantasy",
                ratng : "4 / 5",
            },

            {
                id : 5,
                title : "Playing It My Way",
                author : "Sachin Tendulkar",
                publishedDate : "5 November 2014",
                pages : 486,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/9/93/Playingitmywaybookcover.jpeg",
                description : "In the book, Tendulkar mentioned that just months before the 2007 Cricket World Cup, Greg Chappell, who was at this time the coach of the Indian cricket team, visited Tendulkar at his home and suggested that he should take over the captaincy from Rahul Dravid, then the team captain. Chappell however denied this, stating that he never contemplated Tendulkar replacing Dravid as captain. The book has also been criticised for many factual errors, particularly with the scorecards.",
                category : "Biography",
                rating : "4.7 / 5",
            },

            {
                id : 6,
                title : "All the Light We Cannot See",
                author : "Anthony Doerr",
                publishedDate : "May 6, 2014",
                pages : 544 ,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/2/22/All_the_Light_We_Cannot_See_%28Doerr_novel%29.jpg",
                description : "All the Light We Cannot See is a 2014 war novel by American author Anthony Doerr. The novel is set during World War II. It revolves around the characters Marie-Laure LeBlanc, a blind French girl who takes refuge in her great-uncle's house in Saint-Malo after Paris is invaded by Nazi Germany, and Werner Pfennig, a bright German boy who is accepted into a military school because of his skills in radio technology. The book alternates between paralleling chapters depicting Marie-Laure and Werner, framed with a nonlinear structure. The novel has a lyrical writing style, with critics noting extensive sensory details. The story has ethical themes, portraying the destructive nature of war and Doerr's fascination with science and nature.",
                category : "Fiction",
                rating : "3.9 / 5",
            },

            {
                id : 7,
                title : "The Name of the Wind",
                author : "Patrick Rothfuss",
                publishedDate : "27 March 2007",
                pages : 813,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
                description : "The Kingkiller Chronicle takes place in the fictional world of Temerant, a large continent of which the known part, called the Four Corners of Civilization, is divided into several distinct nations and cultures. Much of the world follows a faith vaguely similar to medieval Christianity. Coexisting alongside the mortal world is the realm of the Fae, a parallel universe inhabited by supernatural creatures which can move between the two realms only when the moon is full. Magic exists in Temerant, too, but obeys a well-defined set of rules and principles that can only be exploited by those who have trained in its professional and scientific use.",
                category : "Fantasy",
                rating : "3.75 / 5",
            },

            {
                id : 8,
                title : "The Discovery of India",
                author : "Jawaharlal Nehru",
                publishedDate : "4 November 1946",
                pages : 595,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/4/4e/Jawaharlal_Nehru_-_The_Discovery_of_India.jpg",
                description : "The journey in The Discovery of India begins from ancient history, leading up to the last years of the British Raj. Nehru uses his knowledge of the Upanishads, Vedas, and textbooks on ancient history to introduce to the reader the development of India from the Indus Valley civilization, through the changes in socio-political scenario every foreign invader brought, to the present day conditions. Nehru was jailed for his participation in the Quit India Movement along with other Indian leaders, and he used this time to write down his thoughts and knowledge about India's history. The book provides a broad view of Indian history, philosophy, and culture as viewed from the eyes of an Indian fighting for the independence of his country. He wrote the book during his imprisonment.",
                category : "History",
                rating : "5 / 5,"
            },

            {
                id : 9,
                title : "Catch-22",
                author : "Joseph Heller",
                publishedDate : "October 10, 1961[",
                pages : 324,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Catch-22_%281961%29_front_cover%2C_first_edition.jpg/330px-Catch-22_%281961%29_front_cover%2C_first_edition.jpg",
                description : "Catch-22 is a satirical war novel by American author Joseph Heller. It is his debut novel. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the twentieth century,[3] it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters. The separate storylines are out of sequence so the timeline develops along with the plot.The novel is set during World War II, from 1942 to 1944. It mainly follows the life of antihero Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th US Army Air Squadron is based on the island of Pianosa, in the Mediterranean Sea west of the Italian mainland, although it also includes episodes from basic training at Lowry Field in Colorado and Air Corps training at Santa Ana Army Air Base in California.",
                category : "Fiction",
                rating : " 3.45 / 5 ",
            },

            {
                id : 10,
                title : "The Immortal Life of Henrietta Lacks",
                author : "Rebecca Skloot",
                publishedDate : "February 2, 2010",
                pages : 381,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Immortal_Life_Henrietta_Lacks_%28cover%29.jpg",
                description : "The book is about Henrietta Lacks and the immortal cell line, known as HeLa, that came from Lacks's cervical cancer cells in 1951. Skloot became interested in Lacks after a biology teacher referenced her but knew little about her. Skloot began conducting extensive research on her and worked with Lacks' family to create the book. The book is notable for its science writing and dealing with ethical issues of race and class in medical research. Skloot said that some of the information was taken from the journal of Deborah Lacks, Henrietta Lacks's daughter, as well as from archival photos and documents, scientific and historical research. It is Skloot's first book.[1]",
                category : "Non-Fiction",
                rating : "4.25 / 5",
            },

            {
                id : 11,
                title : "Pride and Prejudice",
                author : "Jane Austen",
                publishedDate : "28 January, 1813",
                pages : 1000,
                coverImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1kRj1nnXtv-dZUhSj2n_xUDvtQFf5MzNXXcZouIU1FU_hY4A",
                description : "A novel of manners, it follows the character development of Elizabeth Bennet.",
                category : "Fiction",
                rating : "3.8 / 5",
            },
        
            {
                id : 12,
                title : "The Great Gatsby",
                author : "F. Scott Fitzgerald",
                publishedDate : "April 10, 1925",
                pages : 897,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
                description : "The novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby.",
                category : "Non-Fiction",
                rating : "4.25 / 5",
            },
        
            {
                id : 13,
                title : "To Kill a Mockingbird",
                author : "Harper Lee",
                publishedDate : "July 11, 1960",
                pages : 567,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
                description : "The plot and characters are loosely based on Lee's observations of her family.",
                category : "Biography",
                rating : "4.2 / 5",
            },
        
            {
                id : 14,
                title : "Don Quixote",
                author : "Miguel de Cervantes",
                publishedDate : "1605 (Part One) 1615 (Part Two)",
                pages : 978,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Title_page_first_edition_Don_Quijote.jpg/375px-Title_page_first_edition_Don_Quijote.jpg",
                description : "The plot revolves around the adventures of a member of the lowest nobility.",
                category : "Horror",
                rating : "2.9 / 5",
            },
        
            {
                id : 15,
                title : "1984",
                author : "George Orwell",
                publishedDate : "8 June 1949",
                pages : 765,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
                description : "The story takes place in an imagined future. The current year is uncertain, but believed to be 1984.",
                category : "Non-Fiction",
                rating : "3.6 / 5",
            },
        
            {
                id : 16,
                title : "Moby Dick",
                author : "Herman Melville",
                publishedDate : "October 18, 1851",
                pages : 442,
                coverImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/330px-Moby-Dick_FE_title_page.jpg",
                description : "The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick.",
                category : "Fiction",
                rating : "2.9 / 5",
            },
        
            {
                id : 17,
                title : "One Hundred Years of Solitude",
                author : "Gabriel García Márquez",
                publishedDate : "1967",
                pages : 556,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
                description : "The novel is often cited as one of the supreme achievements in world literature..",
                category : "Fantasy",
                rating : "4.8 / 5",
            },
        
            {
                id : 18,
                title : "The Lord of the Rings",
                author : "J. R. R. Tolkien",
                publishedDate : "29 July 1954 ",
                pages : 143,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
                description : "The story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
                category : "History",
                rating : "4.8 / 5",
            },
        
            {
                id : 19,
                title : "Brave New World ",
                author : "Aldous Huxley",
                publishedDate : "February 4, 1932",
                pages : 456,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
                description : "The novel anticipates huge scientific advancements in reproductive technology.",
                category : "Horror",
                rating : "4.8 / 5",
            },
        
            {
                id : 20,
                title : "Crime and Punishment",
                author : "Fyodor Dostoevsky",
                publishedDate : "September 1867",
                pages : 324,
                coverImage : "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png",
                description : "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov.",
                category : "Fantasy",
                rating : "4.6 / 5",
            },

            

        ],
    },
    reducers : {
        addItem : (state, action) => {
            state.books.push(action.payload);
        },
    }
})

export default booksSlice.reducer;
export const { addItem } = booksSlice.actions;