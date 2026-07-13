const {v4 : uuidv4} = require ('uuid');

let posts = [
  {
    id: uuidv4(),
    username: "Ram Chandra",
    content: "I enjoy coding because it allows me to solve problems creatively, build applications that help people, and continuously learn new technologies. Every project teaches me something new and motivates me to keep improving my skills."
  },
  {
    id: uuidv4(),
    username: "Ananya Singh",
    content: "Reading novels helps me escape into different worlds, understand diverse perspectives, and improve my vocabulary. It also gives me peace of mind during stressful times, allowing me to relax and recharge my imagination."
  },
  {
    id: uuidv4(),
    username: "Rohan Mehta",
    content: "Playing football teaches me teamwork, discipline, and perseverance. It keeps me physically fit and mentally strong. The excitement of matches and bonding with friends makes the sport an essential part of my life."
  },
  {
    id: uuidv4(),
    username: "Priya Kapoor",
    content: "Music inspires me daily. It motivates me to stay positive, express emotions freely, and connect with people across cultures. Melodies and rhythms transcend boundaries, making me feel united with the world through sound."
  },
  {
    id: uuidv4(),
    username: "Arjun Verma",
    content: "Traveling allows me to explore new cultures, taste different cuisines, and meet interesting people. It broadens my perspective, helps me appreciate diversity, and creates unforgettable memories that shape my understanding of the world."
  },
  {
    id: uuidv4(),
    username: "Simran Kaur",
    content: "Cooking is my passion. I love experimenting with flavors, creating delicious meals, and sharing them with family and friends. Food brings joy, strengthens bonds, and allows me to express creativity in everyday life."
  },
  {
    id: uuidv4(),
    username: "Rahul Yadav",
    content: "Preparing for competitive exams requires dedication, focus, and consistency. It challenges me to push my limits, develop strong problem-solving skills, and stay motivated even when the journey feels overwhelming and difficult."
  },
  {
    id: uuidv4(),
    username: "Sneha Sharma",
    content: "Yoga keeps me healthy and balanced. It improves flexibility, strengthens my body, and calms my mind. Practicing regularly helps me maintain inner peace, focus, and resilience in the face of everyday challenges."
  },
  {
    id: uuidv4(),
    username: "Kunal Bhatia",
    content: "Solving puzzles sharpens my mind, enhances logical thinking, and improves patience. It gives me satisfaction when I find solutions to complex challenges, making me feel accomplished and motivated to tackle more problems."
  },
  {
    id: uuidv4(),
    username: "Meera Joshi",
    content: "Art is my way of expressing emotions. Through painting and sketching, I communicate feelings that words cannot capture. Creating beauty and meaning on canvas helps me connect with myself and others deeply."
  },
  {
    id: uuidv4(),
    username: "Devansh Chauhan",
    content: "Learning web development excites me. It empowers me to build interactive websites, understand user experience, and contribute to the digital world. Every new skill I acquire makes me feel more confident and capable."
  },
  {
    id: uuidv4(),
    username: "Aditi Mishra",
    content: "Writing poetry allows me to express thoughts creatively, capture emotions, and share stories in a unique way. It helps me reflect on life, connect with readers, and find beauty in everyday experiences."
  },
  {
    id: uuidv4(),
    username: "Siddharth Gupta",
    content: "Basketball is my favorite sport. It teaches me teamwork, strategy, and resilience. Playing regularly keeps me active, competitive, and motivated to improve my skills while enjoying the thrill of the game."
  },
  {
    id: uuidv4(),
    username: "Neha Rani",
    content: "Painting landscapes helps me relax and appreciate nature’s beauty. It allows me to capture moments of peace and serenity on canvas, reminding me of the importance of slowing down and observing life."
  },
  {
    id: uuidv4(),
    username: "Manish Kumar",
    content: "Entrepreneurship inspires me to innovate, take risks, and create opportunities. It challenges me to think differently, build solutions that impact society, and develop resilience in the face of uncertainty and setbacks."
  },
  {
    id: uuidv4(),
    username: "Pooja Sharma",
    content: "Gardening makes me feel peaceful. Watching plants grow and bloom gives me joy. It teaches patience, care, and responsibility while connecting me with nature and reminding me of life’s simple pleasures."
  },
  {
    id: uuidv4(),
    username: "Aman Jain",
    content: "Learning data science excites me. It helps me analyze information, discover patterns, and make decisions based on insights. This knowledge empowers me to contribute meaningfully to technology and innovation."
  },
  {
    id: uuidv4(),
    username: "Ritika Verma",
    content: "Dance is my therapy. It allows me to express emotions, stay fit, and connect with rhythm and movement. Performing brings me joy, confidence, and a sense of freedom unlike anything else."
  },
  {
    id: uuidv4(),
    username: "Nikhil Sharma",
    content: "Playing guitar helps me relax, express creativity, and connect with music deeply. It brings harmony and joy to my life, allowing me to share melodies with others and create lasting memories."
  },
  {
    id: uuidv4(),
    username: "Shreya Singh",
    content: "Volunteering for social causes gives me purpose. Helping others makes me feel fulfilled, strengthens my sense of community, and reminds me of the importance of compassion and empathy in everyday life."
  },
  {
    id: uuidv4(),
    username: "Varun Patel",
    content: "Preparing for my MBA challenges me to think critically, manage time effectively, and develop leadership skills. It motivates me to grow academically and personally while preparing for future opportunities."
  },
  {
    id: uuidv4(),
    username: "Ishita Kapoor",
    content: "Photography is my hobby. Capturing moments allows me to preserve memories and appreciate beauty in everyday life. Each photo tells a story and helps me see the world differently."
  },
  {
    id: uuidv4(),
    username: "Aditya Sharma",
    content: "Gaming excites me. It improves my reflexes, strategic thinking, and creativity while providing entertainment. Playing with friends builds teamwork and creates fun experiences that I cherish deeply."
  },
  {
    id: uuidv4(),
    username: "Kavya Nair",
    content: "Learning French helps me explore new cultures, communicate globally, and appreciate language diversity. It opens doors to opportunities and enriches my understanding of the world through words and expressions."
  },
  {
    id: uuidv4(),
    username: "Raghav Malhotra",
    content: "Swimming keeps me fit and refreshed. It builds endurance, strength, and confidence while giving me peace of mind. Being in water makes me feel free and energized."
  },
  {
    id: uuidv4(),
    username: "Tanvi Gupta",
    content: "Fashion designing inspires me to create unique styles, express creativity, and bring confidence to people through clothing. It allows me to blend art with practicality and make a difference."
  },
  {
    id: uuidv4(),
    username: "Harsh Vardhan",
    content: "Exploring new technologies excites me. It helps me stay updated, innovate, and contribute to advancements in the digital world. Learning continuously keeps me motivated and prepared for the future. jjkgaiijo ijlkvnii ejov fhoir hfr c foishe oifewnf  iehfoh  fowiheofncs sohflkjsjl slhflkla skjdlkflk wioiwfh akjlsjofiw jskfjelkjeoij sjdj"
  },
  {
    id: uuidv4(),
    username: "Tirlok Sharma",
    content: "Getting selected for my first internship was a proud moment. It motivates me to work harder, gain valuable experience, and build a strong foundation for my career aspirations."
  },
  {
    id: uuidv4(),
    username: "Vivek Chauhan",
    content: "Hard work is important to achieve success. It teaches discipline, persistence, and resilience in overcoming challenges. Consistency and determination are the keys to reaching goals and fulfilling dreams."
  }
];

module.exports = posts;