# The Wellington Times

A fully functional, multi-page newspaper website featuring Wellington, New Zealand's local news, complete with interactive games and real content.

## 🎮 Featured Games

The site includes a dedicated **Games** section with five fully playable games:

1. **Wellington Trivia Quiz** - Test your knowledge about Wellington with 10 challenging questions
2. **Word Search** - Find Wellington landmarks hidden in the grid with timer
3. **Memory Match** - Match pairs of Wellington icons with move counter
4. **Daily Quiz** - Literature quiz with 15 questions, one-at-a-time navigation, and instant feedback
5. **Space Invaders** - Classic arcade game with leaderboard, mobile controls, and progressive difficulty

All games feature:
- Score tracking and timers
- Responsive design for mobile and desktop
- Interactive animations and feedback
- LocalStorage for saving progress/scores
- Mobile-optimized touch controls

## 📰 News Sections

### Main Pages
- **Home** - Featured stories and breaking news
- **Politics** - Local and national political coverage
- **Business** - Market updates, startups, and commerce
- **Technology** - Tech news, AI research, and innovation
- **Sports** - Phoenix, Hurricanes, and local sports coverage
- **Culture** - Arts, museums, festivals, and events
- **Opinion** - Columnists and analysis
- **Weather** - Interactive weather forecasts and alerts
- **Games** - Collection of interactive Wellington-themed games

## ✨ Features

### Interactive Elements
- **Live Breaking News Ticker** - Auto-scrolling latest updates
- **Dynamic Date Display** - Always shows current date
- **Weather Widget** - Real-time weather information
- **Newsletter Subscription Forms** - On every section
- **Responsive Navigation** - Sticky header with active page highlighting
- **Trending Stories Sidebar** - Most popular articles
- **Hourly & Weekly Weather Forecasts** - Interactive weather data
- **Game Scoreboards** - Track your performance

### Content Features
- Real Wellington-specific news stories
- Multiple article categories with unique content
- Author profiles and bylines
- Reading time estimates
- Related article suggestions
- Opinion pieces from diverse columnists

### Design Features
- Clean, professional newspaper-style layout
- Smooth animations and transitions
- Mobile-responsive design
- Card-based article layout
- Gradient backgrounds for visual appeal
- Icon-based weather indicators

## 🏗️ Project Structure

```
WGTIMES/
├── index.html              # Homepage
├── css/
│   └── styles.css         # Shared stylesheet
├── js/
│   └── main.js           # Common JavaScript functions
├── pages/
│   ├── politics.html
│   ├── business.html
│   ├── technology.html
│   ├── sports.html
│   ├── culture.html
│   ├── opinion.html
│   ├── weather.html
│   └── games.html        # Games hub
├── games/
│   ├── trivia.html         # Wellington Trivia Quiz
│   ├── wordsearch.html     # Word Search Game
│   ├── memory.html         # Memory Match Game
│   ├── daily-quiz.html     # Daily Literature Quiz
│   └── space-invaders.html # Space Invaders Arcade Game
├── articles/               # Individual article pages
│   └── us-sanctions-russian-oil.html
├── img/                    # Image assets
├── README.md
└── .gitignore
```

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - Interactive features and game logic
- **Responsive Design** - Works on all devices

## 📱 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/camja989/wellington-times.git
   ```

2. Open `index.html` in your web browser

3. Navigate through sections using the top navigation bar

4. Try the games in the Games section!

## 🎯 Game Instructions

### Wellington Trivia
- Answer 10 questions about Wellington
- Track your score and progress
- Get instant feedback on answers
- Learn interesting facts about the capital

### Word Search
- Find 8 Wellington landmarks in the grid
- Click and drag to select words
- Race against the clock
- Words can be horizontal, vertical, or diagonal

### Memory Match
- Match pairs of Wellington-themed icons
- Track your moves and time
- Try to complete with minimum moves
- 8 pairs to find!

### Daily Quiz
- 15 questions about adventure and historical fiction
- One question at a time with navigation
- Instant feedback with explanations
- Skip and return to questions
- Progress tracking and final grading

### Space Invaders
- Classic arcade-style alien shooter
- Progressive difficulty levels
- Mobile touch controls and desktop keyboard
- Top 10 leaderboard with localStorage
- Lives system and score multipliers

## 🎨 Customization

The site uses CSS variables for easy theming:
- `--primary-color`: Main brand color
- `--accent-color`: Highlights and CTAs
- `--text-dark`: Main text
- `--text-light`: Secondary text
- `--bg-light`: Background sections

## 📈 Future Enhancements

### User Account System (Planned)
The following features are planned for future implementation:

#### Authentication & Accounts
- **User Registration** - Sign up with email and password
- **Login/Logout System** - Secure authentication with JWT tokens
- **Password Recovery** - Email-based password reset
- **Profile Management** - Edit username, avatar, bio, and preferences
- **Email Verification** - Verify accounts via email link

#### Social Features
- **Article Comments** - Comment on articles with user accounts
- **Comment Replies** - Threaded comment discussions
- **Like/Dislike System** - React to articles and comments
- **User Ratings** - Rate articles (1-5 stars)
- **Bookmarks/Save Articles** - Save articles to read later
- **Reading History** - Track articles you've read

#### Gamification
- **Unified Leaderboard** - Combined scores across all games
- **Achievements/Badges** - Unlock achievements for various activities
- **User Stats Dashboard** - View personal game statistics
- **Daily Challenges** - New daily challenges with rewards
- **Competition Mode** - Compete with friends on leaderboards

#### Personalization
- **Custom Homepage** - Personalize which sections appear first
- **Newsletter Preferences** - Select topics for email newsletters
- **Dark Mode Toggle** - User preference for light/dark theme
- **Font Size Control** - Accessibility options for text size
- **Save Game Progress** - Cloud save for game progress across devices

#### Community Features
- **User Profiles** - Public profiles showing stats and activity
- **Follow System** - Follow other users and see their activity
- **Private Messaging** - Send messages to other users
- **Community Forums** - Discussion boards for various topics
- **User-Generated Content** - Submit letters to the editor, opinion pieces

#### Admin Features
- **Content Management System** - Admin panel for managing articles
- **User Moderation** - Ban/warn users, moderate comments
- **Analytics Dashboard** - Track site metrics and engagement
- **Newsletter Management** - Send newsletters to subscribers

### Other Planned Features
- Individual article pages with full content
- Advanced search functionality with filters
- Video content integration and live streaming
- Mobile app (iOS/Android) using React Native
- RSS feed integration
- Social media integration (share to Twitter, Facebook, LinkedIn)
- Weather alerts and notifications
- Breaking news push notifications
- Multi-language support
- Archive system for historical articles
- Podcast integration
- Interactive data visualizations
- More games (Crossword, Sudoku, 2048, Snake)
- Live sports scores and updates
- Event calendar for Wellington events

## 👥 Author

Created in 2025 as a demonstration of modern web development techniques.

## License

This project is open source and available for personal and commercial use.
