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

    let popup: any = null;

    const newPage = () => {
      
      const urls = [
        ["Bloomberg", "https://www.bloomberg.com/"],
        ["The Times of India", "https://timesofindia.indiatimes.com/"],
        ["The Straits Times", "https://www.straitstimes.com/"],
        ["El País", "https://english.elpais.com/"],
        ["Le Figaro", "https://www.lefigaro.fr/international"],
        ["The Atlantic Council", "https://www.atlanticcouncil.org/"],
        ["The Diplomat", "https://thediplomat.com/"],
        ["The Africa Report", "https://www.theafricareport.com/"],
        ["Quartz", "https://qz.com/"],
        ["Boston Globe", "https://www.bostonglobe.com/"],
        ["Chicago Tribune", "https://www.chicagotribune.com/"],
        ["Chron of Higher Ed", "https://www.chronicle.com/"],
        ["Chron of Philanthropy", "https://www.philanthropy.com/"],
        ["CS Monitor", "https://www.csmonitor.com/"],
        ["Financial Times", "https://www.ft.com/"],
        ["Globe & Mail", "https://www.theglobeandmail.com/"],
        ["Guardian", "https://www.theguardian.com/"],
        ["Ha'aretz", "https://www.haaretz.com/"],
        ["Japan Times", "https://www.japantimes.co.jp/"],
        ["Jerusalem Post", "https://www.jpost.com/"],
        ["London Telegraph", "https://www.telegraph.co.uk/"],
        ["Los Angeles Times", "https://www.latimes.com/"],
        ["Moscow Times", "https://www.themoscowtimes.com/"],
        ["National Post", "https://nationalpost.com/"],
        ["New York Times", "https://www.nytimes.com/"],
        ["New Zealand Herald", "https://www.nzherald.co.nz/"],
        ["Observer", "https://observer.co.uk/"],
        ["SMH", "https://www.smh.com.au/"],
        ["South China Morning Post", "https://www.scmp.com/"],
        ["The Australian", "https://www.theaustralian.com.au/"],
        ["The Hindu", "https://www.thehindu.com/"],
        ["The Independent", "https://www.independent.co.uk/"],
        ["USA Today", "https://www.usatoday.com/"],
        ["Wall Street Journal", "https://www.wsj.com"],
        ["Washington Post", "https://www.washingtonpost.com"],
        ["ABC", "https://abcnews.go.com/"],
        ["Al Jazeera", "https://www.aljazeera.com/"],
        ["AP", "https://apnews.com/"],
        ["BBC", "https://www.bbc.com/news/"],
        ["CBC", "https://www.cbc.ca/news/"],
        ["CBS", "https://www.cbsnews.com/"],
        ["CNBC", "https://www.cnbc.com/"],
        ["CNN", "https://www.cnn.com/"],
        ["Deutsche Welle", "https://www.dw.com/"],
        ["Fox", "https://www.foxnews.com/"],
        ["France24", "https://www.france24.com/"],
        ["Google", "https://news.google.com/"],
        ["MarketWatch", "https://www.marketwatch.com/"],
        ["MSNBC", "https://www.msnbc.com"],
        ["NBC", "https://www.nbcnews.com/"],
        ["NPR", "https://www.npr.org/"],
        ["Reuters", "https://www.reuters.com/"],
        ["Yahoo", "https://news.yahoo.com/"],
        ["Aeon", "https://aeon.co/"],
        ["American Conservative", "https://www.theamericanconservative.com//"],
        ["American Prospect", "https://prospect.org/"],
        ["American Scholar", "https://theamericanscholar.org/"],
        ["American Scientist", "https://www.americanscientist.org/"],
        ["American Spectator", "https://spectator.org/"],
        ["Art News", "https://www.artnews.com/"],
        ["Artforum", "https://www.artforum.com/"],
        ["Arts & Letters Daily", "https://www.aldaily.com/"],
        ["Atlantic Monthly", "https://www.theatlantic.com/"],
        ["Atlas Obscura", "https://www.atlasobscura.com/"],
        ["Boston Globe Ideas", "https://www.bostonglobe.com/ideas"],
        ["Boston Review", "https://www.bostonreview.net/"],
        ["Business Insider", "https://www.businessinsider.com/"],
        ["Cabinet", "https://cabinetmagazine.org/"],
        ["Chronicle Review", "https://www.chronicle.com/the-chronicle-review/"],
        ["City Journal", "https://www.city-journal.org/"],
        ["Columbia Journal Rev", "https://www.cjr.org/"],
        ["Commentary", "https://www.commentary.org/"],
        ["Commonweal", "https://www.commonwealmagazine.org/"],
        ["Current Affairs", "https://www.currentaffairs.org/"],
        ["Democracy", "https://democracyjournal.org/"],
        ["Der Spiegel", "https://www.spiegel.de/international"],
        ["Discover", "https://www.discovermagazine.com/"],
        ["Dissent", "https://www.dissentmagazine.org/"],
        ["Electric Literature", "https://electricliterature.com/"],
        ["Engelsberg Ideas", "https://engelsbergideas.com/"],
        ["Eurozine", "https://www.eurozine.com/"],
        ["First Things", "https://www.firstthings.com/"],
        ["Forbes", "https://www.forbes.com/"],
        ["Foreign Affairs", "https://www.foreignaffairs.com"],
        ["Foreign Policy", "https://foreignpolicy.com/"],
        ["Fortnightly Review", "https://fortnightlyreview.co.uk/"],
        ["Globalist", "https://www.theglobalist.com/"],
        ["Guernica Magazine", "https://www.guernicamag.com/"],
        ["Harper's", "https://harpers.org/"],
        ["Harvard Magazine", "https://www.harvardmagazine.com/"],
        ["Hedgehog Review", "https://hedgehogreview.com/"],
        ["History Today", "https://www.historytoday.com/"],
        ["Hoover Digest", "https://www.hoover.org/publications/hoover-digest/"],
        ["Hudson Review", "https://hudsonreview.com/"],
        ["Humanities", "https://www.neh.gov/news/humanities.html/"],
        ["In These Times", "https://inthesetimes.com/"],
        ["Jacobin", "https://jacobinmag.com/"],
        ["Journal of Democracy", "https://journalofdemocracy.org/"],
        ["JSTOR Daily", "https://daily.jstor.org/"],
        ["Lapham's Quarterly", "https://www.laphamsquarterly.org/"],
        ["Le Monde Diplo en", "https://mondediplo.com"],
        ["Le Monde Diplo fr", "https://www.monde-diplomatique.fr/"],
        ["Liberties", "https://libertiesjournal.com/"],
        ["Logos", "https://logosjournal.com/"],
        ["Longreads", "https://longreads.com/"],
        ["Maclean's", "https://macleans.ca/"],
        ["MIT tech review", "https://www.technologyreview.com/"],
        ["Mosaic", "https://mosaicmagazine.com/"],
        ["Mother Jones", "https://www.motherjones.com/"],
        ["Ms. Magazine", "https://msmagazine.com/"],
        ["n+1", "https://www.nplusonemag.com/"],
        ["National Affairs", "https://nationalaffairs.com/"],
        ["National Interest", "https://nationalinterest.org/"],
        ["National Review", "https://www.nationalreview.com/"],
        ["Nautilus", "https://nautil.us/"],
        ["New Atlantis", "https://www.thenewatlantis.com/"],
        ["New Criterion", "https://newcriterion.com/"],
        ["New English Review", "https://www.newenglishreview.org/"],
        ["New Left Review", "https://newleftreview.org/"],
        ["New Republic", "https://newrepublic.com/"],
        ["New Scientist", "https://www.newscientist.com/"],
        ["New Statesman", "https://www.newstatesman.com/"],
        ["New York Magazine", "https://nymag.com/"],
        ["New York Observer", "https://observer.com/"],
        ["New Yorker", "https://www.newyorker.com/"],
        ["Newsweek", "https://www.newsweek.com/"],
        ["NY Times Magazine", "https://www.nytimes.com/section/magazine"],
        ["Open Democracy", "https://www.opendemocracy.net/"],
        ["Palladium Magazine", "https://www.palladiummag.com/"],
        ["Paris Review", "https://www.theparisreview.org/"],
        ["The Paris Review Daily", "https://www.theparisreview.org/blog/"],
        ["Philosophy Now", "https://philosophynow.org/"],
        ["Plough", "https://www.plough.com/"],
        ["Poetry", "https://www.poetryfoundation.org/poetrymagazine/"],
        ["Poets & Writers", "https://www.pw.org/"],
        ["Project Syndicate", "https://www.project-syndicate.org/"],
        ["Politico", "https://www.politico.com/"],
        ["Politico Europe", "https://www.politico.eu/"],
        ["Prospect", "https://www.prospectmagazine.co.uk"],
        ["Psyche", "https://psyche.co/"],
        ["Psychology Today", "https://www.psychologytoday.com"],
        ["Public Discourse", "https://www.thepublicdiscourse.com/"],
        ["Public Domain Review", "https://publicdomainreview.org/"],
        ["Reason", "https://reason.com/"],
        ["Salon", "https://www.salon.com/"],
        ["ScienceDaily", "https://www.sciencedaily.com/"],
        ["Scientific American", "https://www.scientificamerican.com/"],
        ["Semafor", "https://www.semafor.com/"],
        ["Skeptical Inquirer", "https://skepticalinquirer.org/"],
        ["Slate", "https://slate.com/"],
        ["Smart Set", "https://www.thesmartset.com/"],
        ["Smithsonian Magazine", "https://www.smithsonianmag.com/"],
        ["Spiked-Online", "https://www.spiked-online.com/"],
        ["Technology Review", "https://www.technologyreview.com"],
        ["The American", "https://theamericanmag.com/"],
        ["The Baffler", "https://thebaffler.com/"],
        ["The Conversation", "https://theconversation.com/"],
        ["The Daily Beast", "https://www.thedailybeast.com/"],
        ["The Dial", "https://www.thedial.world/"],
        ["The Economist", "https://www.economist.com/"],
        ["The Economist 1843 Magazine", "https://www.economist.com/1843"],
        ["The European", "https://the-european.eu/"],
        ["The Hill", "https://thehill.com/"],
        ["The Humanist", "https://thehumanist.com/"],
        ["The Millions", "https://themillions.com/"],
        ["The Nation", "https://www.thenation.com/"],
        ["The Point", "https://thepointmag.com/"],
        ["The Progressive", "https://progressive.org/"],
        ["The Spectator", "https://www.spectator.co.uk/"],
        ["TheVerge", "https://www.theverge.com/"],
        ["The Walrus", "https://thewalrus.ca/"],
        ["Time Magazine", "https://time.com/"],
        ["US News", "https://www.usnews.com"],
        ["Utne Reader", "https://www.utne.com/"],
        ["Village Voice", "https://www.villagevoice.com/"],
        ["Washington Monthly", "https://washingtonmonthly.com/"],
        ["Wired", "https://www.wired.com/"],
        ["Yale Review", "https://yalereview.org/"],
        ["American Scholar Books", "https://theamericanscholar.org/dept/book-reviews/"],
        ["Atlantic Books", "https://www.theatlantic.com/books/"],
        ["Australian Book Review", "https://www.australianbookreview.com.au/"],
        ["B&N Reads", "https://www.barnesandnoble.com/blog/"],
        ["Book Riot", "https://bookriot.com/"],
        ["Bookforum", "https://www.bookforum.com/"],
        ["Boston Globe Books", "https://www.bostonglobe.com/arts/books/"],
        ["Complete Review", "https://complete-review.com/new/new.html"],
        ["CS Monitor Books", "https://www.csmonitor.com/Books/Book-Reviews"],
        ["Dublin Review", "https://drb.ie/"],
        ["Economist Culture", "https://www.economist.com/culture"],
        ["Financial Times Books", "https://www.ft.com/books"],
        ["Globe & Mail Books", "https://www.theglobeandmail.com/arts/books-and-media/book-reviews/"],
        ["Guardian Books", "https://www.theguardian.com/books"],
        ["Independent Books", "https://www.independent.co.uk/arts-entertainment/books"],
        ["Jewish Review of Books", "https://jewishreviewofbooks.com/"],
        ["Kirkus Reviews", "https://www.kirkusreviews.com/"],
        ["Literary Review", "https://literaryreview.co.uk/"],
        ["London Review", "https://www.lrb.co.uk/"],
        ["Los Angeles Review of Books", "https://lareviewofbooks.org/"],
        ["Los Angeles Times", "https://www.latimes.com/entertainment-arts/books"],
        ["Melbourne Age", "https://www.theage.com.au/culture/books"],
        ["New Republic Books", "https://newrepublic.com/tags/books"],
        ["New Statesman Books", "https://www.newstatesman.com/culture/books"],
        ["New York Review", "https://www.nybooks.com/"],
        ["New Yorker Books", "https://www.newyorker.com/culture"],
        ["Newsday Books", "https://www.newsday.com/entertainment/books"],
        ["NY Times Books", "https://www.nytimes.com/section/books/review"],
        ["Public Books", "https://www.publicbooks.org/"],
        ["Publisher's Weekly", "https://www.publishersweekly.com/"],
        ["Scotsman Books", "https://www.scotsman.com/arts-and-culture/books"],
        ["Spectator Books", "https://www.spectator.co.uk/the-critics/books"],
        ["Spiked Books", "https://www.spiked-online.com/topic/books/"],
        ["Sydney Review of Books", "https://sydneyreviewofbooks.com/"],
        ["Tablet Books", "https://www.tabletmag.com/sections/arts-letters"],
        ["Telegraph Books", "https://www.telegraph.co.uk/books/non-fiction/"],
        ["The Nation Books", "https://www.thenation.com/culture/"],
        ["The Rumpus", "https://therumpus.net/"],
        ["The TLS", "https://www.the-tls.co.uk/"],
        ["University Bookman", "https://kirkcenter.org/bookman/"],
        ["Washington Post", "https://www.washingtonpost.com/entertainment/books/"],
        ["Washington Times", "https://www.washingtontimes.com/books/"],
        ["WSJ Books", "https://www.wsj.com/arts-culture/books/"]
      ]

      const randomPage = Math.floor(Math.random() * (urls.length));
         
      const vw = window.screen.width
      const vh = window.screen.height

      if (popup && !popup.closed) {
        popup.close();
      }
      
      try {
        popup = window.open("", "w1", `height=${vh},width=${vw},resizable=yes,scrollbars=yes`);
        popup.focus()
        popup.location = urls[randomPage][1]
        console.log(urls[randomPage][0], urls[randomPage][1])
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
          <button onClick={() => newPage()} className="bg-orange-500 hover:bg-orange-700 text-white text-lg font-bold py-2 px-4 rounded-[5px] mb-3">
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




