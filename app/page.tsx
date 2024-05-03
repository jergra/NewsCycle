'use client'

import React, { useEffect, useState, useCallback } from 'react'
import styled from'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100vh;
  background-image: url('https://picsum.photos/200/300?grayscale');
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(5, 5, 5, 0.8); /* adjust opacity here */
  font-family: 'Open Sans', sans-serif;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 20vh;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;

const Tagline = styled.p`
  font-size: 18px;
  color: #fff;
`;

const SpeedSelect = styled.select`
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Option = styled.option`
  font-size: 18px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
`;

const GithubLink = styled.a`
  font-size: 18px;
  color: #777777;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #555555;
  }
`;

const NewsCycle = () => {
    
    const [speed, setSpeed] = useState('4')
    const [intervalId, setIntervalId] = useState(null)

    const handleSpeedChange = useCallback((e: any) => {
      setSpeed(() => {      
        // update your state via callback, this gives you the option
        // to access the previous state and set the localStorage value
        const newSpeed = e.target.value === "4" ? "4" : e.target.value;
        localStorage.setItem("speed", newSpeed);
        return newSpeed;
      });
      if (intervalId) {
        clearInterval(intervalId)
      }
    }, []);
  
    useEffect(() => {
      // set the initial speed value when component mounts
      // but only when the window object is defined
      if (typeof window === undefined) return;
      setSpeed(localStorage?.getItem("speed") ?? "4");
    }, []);
  
    useEffect(() => {
        const interval: any = setInterval(() => {
          newPage()
        }, parseFloat(speed) * 60000);
        setIntervalId(interval)
        return () => clearInterval(interval);
    }, [speed])

    const newPage = () => {
      
      const urls = [
        ["Boston Globe", "https://bostonglobe.com/"],
        ["Chicago Tribune", "https://chicagotribune.com/"],
        ["Chron of Higher Ed", "https://chronicle.com/"],
        ["Chron of Philanthropy", "https://philanthropy.com/"],
        ["CS Monitor", "https://csmonitor.com/"],
        ["Financial Times", "https://ft.com/"],
        ["Globe & Mail", "https://theglobeandmail.com/"],
        ["Guardian", "https://theguardian.com/"],
        ["Ha'aretz", "https://haaretz.com/"],
        ["Japan Times", "https://japantimes.co.jp/"],
        ["Jerusalem Post", "https://jpost.com/"],
        ["London Telegraph", "https://telegraph.co.uk/"],
        ["Los Angeles Times", "https://latimes.com/"],
        ["Moscow Times", "https://themoscowtimes.com/"],
        ["National Post", "https://nationalpost.com/"],
        ["New York Times", "https://nytimes.com/"],
        ["New Zealand Herald", "https://nzherald.co.nz/"],
        ["Observer", "https://www.theguardian.com/observer"],
        ["SMH", "https://smh.com.au/"],
        ["The Australian", "https://theaustralian.com.au/"],
        ["The Hindu", "https://beta.thehindu.com/"],
        ["The Independent", "https://independent.co.uk/"],
        ["USA Today", "https://usatoday.com/"],
        ["Wall Street Journal", "https://wsj.com"],
        ["Washington Post", "https://washingtonpost.com"],
        ["ABC", "https://abcnews.go.com/"],
        ["Al Jazeera", "https://aljazeera.com/"],
        ["AP", "https://hosted.ap.org/"],
        ["BBC", "https://news.bbc.co.uk/"],
        ["CBC", "https://cbc.ca/news/"],
        ["CBS", "https://cbsnews.com/"],
        ["CNBC", "https://cnbc.com/"],
        ["CNN", "https://cnn.com/"],
        ["Fox", "https://foxnews.com/"],
        ["Google", "https://news.google.com/"],
        ["MarketWatch", "https://marketwatch.com/"],
        ["MSNBC", "https://msnbc.com"],
        ["NBC", "https://nbcnews.com/"],
        ["NPR", "https://npr.org/"],
        ["Reuters", "https://reuters.com/"],
        ["Yahoo", "https://news.yahoo.com/"],
        ["Aeon", "https://aeon.co/"],
        ["American Conservative", "https://amconmag.com/"],
        ["American Interest", "https://the-american-interest.com/"],
        ["American Prospect", "https://prospect.org/"],
        ["American Scholar", "https://theamericanscholar.org/"],
        ["American Scientist", "https://americanscientist.org/"],
        ["American Spectator", "https://spectator.org/"],
        ["Arion", "https://bu.edu/arion/"],
        ["Art News", "https://artnews.com/"],
        ["Artforum", "https://artforum.com/"],
        ["Arts & Letters Daily", "https://aldaily.com/"],
        ["Atlantic Monthly", "https://theatlantic.com/magazine/"],
        ["Atlas Obscura", "https://atlasobscura.com/"],
        ["Boston Globe Ideas", "https://bostonglobe.com/ideas"],
        ["Boston Review", "https://bostonreview.net/"],
        ["Cabinet", "https://cabinetmagazine.org/"],
        ["Chronicle Review", "https://www.chronicle.com/the-chronicle-review/"],
        ["City Journal", "https://city-journal.org/"],
        ["Columbia Journal Rev", "https://cjr.org/"],
        ["Commentary", "https://www.commentary.org/"],
        ["Common-place", "https://common-place.org/"],
        ["Commonweal", "https://commonwealmagazine.org/"],
        ["Current Affairs", "https://currentaffairs.org/"],
        ["Democracy", "https://democracyjournal.org/"],
        ["Der Spiegel", "https://spiegel.de/international"],
        ["Discover", "https://discovermagazine.com/"],
        ["Dissent", "https://dissentmagazine.org/"],
        ["Economic Principals", "https://economicprincipals.com/"],
        ["Edge", "https://edge.org/"],
        ["Electric Literature", "https://electricliterature.com/"],
        ["Engelsberg Ideas", "https://engelsbergideas.com/"],
        ["Eurozine", "https://eurozine.com/"],
        ["Evolutionary Psych", "https://human-nature.com/ep/"],
        ["First Things", "https://firstthings.com/"],
        ["Forbes", "https://forbes.com/"],
        ["Foreign Affairs", "https://foreignaffairs.com"],
        ["Foreign Policy", "https://foreignpolicy.com/"],
        ["Fortnightly Review", "https://fortnightlyreview.co.uk/"],
        ["Globalist", "https://theglobalist.com/"],
        ["Grist", "https://grist.org/"],
        ["Guernica Magazine", "https://guernicamag.com/"],
        ["Harper's", "https://harpers.org/"],
        ["Harvard Magazine", "https://harvardmagazine.com/"],
        ["Hedgehog Review", "https://hedgehogreview.com/"],
        ["History Today", "https://historytoday.com/frontpage.aspx"],
        ["Hoover Digest", "https://hooverdigest.org/"],
        ["Hudson Review", "https://hudsonreview.com/"],
        ["Humanities", "https://neh.gov/news/humanities.html"],
        ["In These Times", "https://inthesetimes.com/"],
        ["Intelligent Life", "https://moreintelligentlife.com/"],
        ["Jacobin", "https://jacobinmag.com/"],
        ["Journal of Democracy", "https://journalofdemocracy.org/"],
        ["JSTOR Daily", "https://daily.jstor.org/"],
        ["King's Review", "https://kingsreview.co.uk/"],
        ["Lambda Literary Review", "https://lambdaliterary.org/"],
        ["Lapham's Quarterly", "https://laphamsquarterly.org/"],
        ["Le Monde Diplo en", "https://mondediplo.com"],
        ["Le Monde Diplo fr", "https://monde-diplomatique.fr/"],
        ["Liberties", "https://libertiesjournal.com/"],
        ["Logos", "https://logosjournal.com/"],
        ["Maclean's", "https://macleans.ca/"],
        ["MIT tech review", "https://technologyreview.com/"],
        ["Mosaic", "https://mosaicmagazine.com/"],
        ["Mother Jones", "https://motherjones.com/"],
        ["Ms. Magazine", "https://msmagazine.com/"],
        ["n+1", "https://nplusonemag.com/"],
        ["National Affairs", "https://nationalaffairs.com/"],
        ["National Interest", "https://nationalinterest.org/"],
        ["National Review", "https://nationalreview.com/"],
        ["Nautilus", "https://nautil.us/"],
        ["New Atlantis", "https://thenewatlantis.com/index.html"],
        ["New Criterion", "https://newcriterion.com/"],
        ["New English Review", "https://newenglishreview.org/"],
        ["New Left Review", "https://newleftreview.org/"],
        ["New Republic", "https://newrepublic.com/"],
        ["New Scientist", "https://newscientist.com/"],
        ["New Statesman", "https://newstatesman.com/"],
        ["New York Magazine", "https://nymag.com/"],
        ["New York Observer", "https://observer.com/"],
        ["New Yorker", "https://newyorker.com/"],
        ["Newsweek", "https://newsweek.com/"],
        ["NY Times Magazine", "https://nytimes.com/section/magazine"],
        ["Open Democracy", "https://opendemocracy.net/"],
        ["Palladium Magazine", "https://palladiummag.com/"],
        ["Paris Review", "https://theparisreview.org/"],
        ["Philosophy & Literature", "https://muse.jhu.edu/journals/philosophy_and_literature/toc/phl.33.2.html"],
        ["Philosophy Now", "https://philosophynow.org/"],
        ["Plough", "https://plough.com/"],
        ["Poetry", "https://poetryfoundation.org/poetrymagazine/"],
        ["Poets & Writers", "https://pw.org/"],
        ["Project Syndicate", "https://project-syndicate.org/"],
        ["Prospect", "https://prospectmagazine.co.uk"],
        ["Psychology Today", "https://psychologytoday.com"],
        ["Public Discourse", "https://thepublicdiscourse.com/"],
        ["Public Domain Review", "https://publicdomainreview.org/"],
        ["Reason", "https://reason.com/"],
        ["Salon", "https://salon.com/"],
        ["Scientific American", "https://scientificamerican.com/"],
        ["Semafor", "https://semafor.com/"],
        ["Skeptical Inquirer", "https://csicop.org/si/"],
        ["Slate", "https://slate.com/"],
        ["Smart Set", "https://thesmartset.com/default.aspx/"],
        ["Smithsonian Magazine", "https://smithsonianmag.com/"],
        ["Spiked-Online", "https://spiked-online.com/"],
        ["Technology Review", "https://technologyreview.com"],
        ["The American", "https://theamerican.com/"],
        ["The Baffler", "https://thebaffler.com/"],
        ["The Daily Beast", "https://thedailybeast.com/"],
        ["The Dial", "https://thedial.world/"],
        ["The Economist", "https://economist.com/"],
        ["The European", "https://the-european.eu/"],
        ["The Humanist", "https://thehumanist.org/"],
        ["The Millions", "https://themillions.com/"],
        ["The Nation", "https://thenation.com/"],
        ["The New Inquiry", "https://thenewinquiry.com/"],
        ["The Outline", "https://theoutline.com/"],
        ["The Point", "https://thepointmag.com/"],
        ["The Progressive", "https://progressive.org/"],
        ["The Spectator", "https://spectator.co.uk/"],
        ["TheVerge", "https://theverge.com/"],
        ["The Walrus", "https://thewalrus.ca/"],
        ["The White Review", "https://thewhitereview.org/"],
        ["Threepenny Review", "https://threepennyreview.com/"],
        ["Time Magazine", "https://time.com/time"],
        ["US News", "https://usnews.com"],
        ["Utne Reader", "https://utne.com/"],
        ["Village Voice", "https://villagevoice.com/"],
        ["Washington Monthly", "https://washingtonmonthly.com/"],
        ["Weekly Standard", "https://weeklystandard.com/"],
        ["Wilson Quarterly", "https://www.wilsonquarterly.com/"],
        ["Wired", "https://wired.com/"],
        ["World Affairs", "https://worldaffairsjournal.org/"],
        ["Yale Review", "https://yalereview.yale.edu/"],
        ["American Scholar Books", "https://theamericanscholar.org/dept/book-reviews/"],
        ["Atlantic Books", "https://theatlantic.com/books/"],
        ["Australian Book Review", "https://australianbookreview.com.au/"],
        ["B&N Reads", "https://barnesandnoble.com/blog/"],
        ["Bookforum", "https://bookforum.com/"],
        ["Boston Globe Books", "https://www.bostonglobe.com/arts/books/"],
        ["Complete Review", "https://complete-review.com/new/new.html"],
        ["CS Monitor Books", "https://csmonitor.com/Books/Book-Reviews"],
        ["Dublin Review", "https://drb.ie/"],
        ["Economist Books", "https://economist.com/books/"],
        ["Financial Times Books", "https://ft.com/arts/books"],
        ["Globe & Mail Books", "https://theglobeandmail.com/arts/books-and-media/book-reviews/"],
        ["Guardian Books", "https://theguardian.com/books"],
        ["Independent Books", "https://independent.co.uk/arts-entertainment/books"],
        ["January Magazine", "https://januarymagazine.com"],
        ["Jewish Review of Books", "https://jewishreviewofbooks.com/"],
        ["Literary Review", "https://literaryreview.co.uk/"],
        ["London Review", "https://lrb.co.uk/"],
        ["Los Angeles Review of Books", "https://lareviewofbooks.org/"],
        ["Los Angeles Times", "https://latimes.com/features/books/"],
        ["Melbourne Age", "https://theage.com.au/entertainment/books/index.html"],
        ["Metapsychology", "https://metapsychology.mentalhelp.net/poc/view_index.php?idx=news"],
        ["New Republic Books", "https://newrepublic.com/tags/books"],
        ["New Statesman Books", "https://newstatesman.com/books"],
        ["New York Review", "https://nybooks.com/"],
        ["New Yorker Books", "https://newyorker.com/culture"],
        ["Newsday Books", "https://newsday.com/features/booksmags/"],
        ["NY Times Books", "https://nytimes.com/pages/books/review/index.html"],
        ["Open Letters", "https://openlettersmonthly.com/issue/"],
        ["Public Books", "https://publicbooks.org/"],
        ["Scotsman Books", "https://scotsman.com/arts-and-culture/books"],
        ["Spectator Books", "https://spectator.co.uk/the-critics/books"],
        ["Spiked Books", "https://www.spiked-online.com/topic/books/"],
        ["Sydney Review of Books", "https://sydneyreviewofbooks.com/"],
        ["Tablet Books", "https://tabletmag.com/category/books/"],
        ["Telegraph Books", "https://telegraph.co.uk/culture/books/non_fictionreviews/"],
        ["The Hindu Books", "https://beta.thehindu.com/"],
        ["The Nation Books", "https://thenation.com/culture/"],
        ["The TLS", "https://the-tls.co.uk/"],
        ["Times Higher Ed Books", "https://timeshighereducation.com/academic/books"],
        ["University Bookman", "https://kirkcenter.org/bookman/"],
        ["Washington Post", "https://washingtonpost.com/wp-dyn/content/artsandliving/books/index.html"],
        ["Washington Times", "https://washingtontimes.com/books/"],
        ["WSJ Books", "https://wsj.com/arts-culture/books/"]
      ]

      const randomPage = Math.floor(Math.random() * (urls.length));
         
      const vw = window.screen.width
      const vh = window.screen.height
      
      try {
        const popup: any = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
        popup.focus()
        popup.location = urls[randomPage][1]
        console.log('site: ', urls[randomPage][0], urls[randomPage][1])
      } catch (error) {
        console.error("Failed to open new window", error)
      }
   }

    
   return (
      <Container>
        <HeaderContainer>
          <Header>NewsCycle</Header>
          <Tagline>Stay informed, effortlessly.</Tagline>
        </HeaderContainer>
        <div className="flex flex-col items-center justify-between h-1/5">
          <button onClick={() => newPage()} className="bg-orange-500 hover:bg-orange-700 text-white text-lg font-bold py-2 px-4 rounded-[5px]">
            Start
          </button>
          <SpeedSelect value={speed} onChange={handleSpeedChange}>
            <Option value="1">1 minute</Option>
            <Option value="2">2 minutes</Option>
            <Option value="3">3 minutes</Option>
            <Option value="4">4 minutes</Option>
            <Option value="6">6 minutes</Option>
            <Option value="10">9 minutes</Option>
          </SpeedSelect>
        </div>
        <Footer>
          <GithubLink href="https://github.com/jergra/NewsCycle/tree/main" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </GithubLink>
        </Footer>
      </Container>
   )
}

export default NewsCycle;




