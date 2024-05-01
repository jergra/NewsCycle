'use client'

import React, { useEffect, useState } from 'react'
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
    
    const [speed, setSpeed] = useState(localStorage.getItem('speed') || '4')
    const [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        const interval: any = setInterval(() => {
          newPage()
        }, parseFloat(speed) * 60000);
        setIntervalId(interval)
        return () => clearInterval(interval);
    }, [speed])

    const handleSpeedChange = (e: any) => {
      console.log('Speed changed to:', e.target.value);
      setSpeed(e.target.value)
      localStorage.setItem('speed', e.target.value)
      if (intervalId) {
        clearInterval(intervalId)
      }
    }

    const newPage = () => {
    
      const urls = [
        ["Boston Globe", "http://www.bostonglobe.com/"],
        ["Chicago Tribune", "http://www.chicagotribune.com/"],
        ["Chron of Higher Ed", "http://chronicle.com/"],
        ["Chron of Philanthropy", "http://philanthropy.com/"],
        ["CS Monitor", "http://www.csmonitor.com/"],
        ["Financial Times", "https://www.ft.com/"],
        ["Globe & Mail", "http://www.theglobeandmail.com/"],
        ["Guardian", "http://www.guardian.co.uk/"],
        ["Ha'aretz", "http://www.haaretz.com/"],
        ["Japan Times", "http://www.japantimes.co.jp/"],
        ["Jerusalem Post", "http://www.jpost.com/"],
        ["London Telegraph", "http://www.telegraph.co.uk/"],
        ["Los Angeles Times", "http://www.latimes.com/"],
        ["Moscow Times", "http://www.themoscowtimes.com/"],
        ["National Post", "http://www.nationalpost.com/"],
        ["New York Times", "http://www.nytimes.com/"],
        ["New Zealand Herald", "http://www.nzherald.co.nz/"],
        ["Observer", "http://www.observer.co.uk/"],
        ["SMH", "http://www.smh.com.au/"],
        ["The Australian", "http://www.theaustralian.com.au/"],
        ["The Hindu", "http://beta.thehindu.com/"],
        ["The Independent", "http://www.independent.co.uk/"],
        ["USA Today", "http://usatoday.com/"],
        ["Wall Street Journal", "http://wsj.com"],
        ["Washington Post", "http://www.washingtonpost.com"],
        ["ABC", "http://abcnews.go.com/"],
        ["Al Jazeera", "http://www.aljazeera.com/"],
        ["AP", "http://hosted.ap.org/"],
        ["BBC", "http://news.bbc.co.uk/"],
        ["CBC", "http://www.cbc.ca/news/"],
        ["CBS", "http://cbsnews.com/"],
        ["CNBC", "http://www.cnbc.com/"],
        ["CNN", "http://www.cnn.com/"],
        ["Fox", "http://www.foxnews.com/"],
        ["Google", "https://news.google.com/"],
        ["MarketWatch", "http://www.marketwatch.com/"],
        ["MSNBC", "http://www.msnbc.com"],
        ["NBC", "http://www.nbcnews.com/"],
        ["NPR", "http://www.npr.org/"],
        ["Reuters", "http://www.reuters.com/"],
        ["Yahoo", "http://news.yahoo.com/"],
        ["Aeon", "http://www.aeonmagazine.com/"],
        ["American Conservative", "http://www.amconmag.com/"],
        ["American Interest", "http://www.the-american-interest.com/"],
        ["American Prospect", "http://www.prospect.org/"],
        ["American Scholar", "http://www.theamericanscholar.org/"],
        ["American Scientist", "http://www.americanscientist.org/"],
        ["American Spectator", "http://www.spectator.org/"],
        ["Arion", "http://www.bu.edu/arion/"],
        ["Armed Forces Journal", "http://www.armedforcesjournal.com/"],
        ["Art News", "http://www.artnews.com/"],
        ["Artforum", "http://www.artforum.com/"],
        ["Atlantic Monthly", "http://www.theatlantic.com/magazine/"],
        ["Atlas Obscura", "http://www.atlasobscura.com/"],
        ["Boston Globe Ideas", "http://www.bostonglobe.com/ideas"],
        ["Boston Review", "http://bostonreview.net/"],
        ["Cabinet", "http://www.cabinetmagazine.org/"],
        ["Chronicle Review", "http://chronicle.com/section/The-Chronicle-Review/41?al"],
        ["City Journal", "http://www.city-journal.org/"],
        ["Columbia Journal Rev", "http://www.cjr.org/"],
        ["Commentary", "http://www.commentarymagazine.com/"],
        ["Common-place", "http://www.common-place.org/"],
        ["Commonweal", "http://www.commonwealmagazine.org/"],
        ["Current Affairs", "https://www.currentaffairs.org/"],
        ["Democracy", "http://www.democracyjournal.org/"],
        ["Der Spiegel", "http://www.spiegel.de/international"],
        ["Discover", "http://discovermagazine.com/"],
        ["Dissent", "http://www.dissentmagazine.org/"],
        ["Economic Principals", "http://www.economicprincipals.com/"],
        ["Edge", "http://www.edge.org/"],
        ["Electric Literature", "https://electricliterature.com/"],
        ["Engelsberg Ideas", "https://engelsbergideas.com/"],
        ["Eurozine", "http://www.eurozine.com/"],
        ["Evolutionary Psych", "http://human-nature.com/ep/"],
        ["First Things", "http://www.firstthings.com/"],
        ["Forbes", "http://www.forbes.com/"],
        ["Foreign Affairs", "http://www.foreignaffairs.com"],
        ["Foreign Policy", "http://www.foreignpolicy.com/"],
        ["Fortnightly Review", "http://fortnightlyreview.co.uk/"],
        ["Globalist", "http://www.theglobalist.com/"],
        ["Grist", "https://grist.org/"],
        ["Guernica Magazine", "http://www.guernicamag.com/"],
        ["Harper's", "http://www.harpers.org/"],
        ["Harvard Magazine", "https://www.harvardmagazine.com/"],
        ["Hedgehog Review", "https://hedgehogreview.com/"],
        ["History Today", "http://www.historytoday.com/frontpage.aspx"],
        ["Hoover Digest", "http://www.hooverdigest.org/"],
        ["Hudson Review", "http://www.hudsonreview.com/"],
        ["Humanities", "http://www.neh.gov/news/humanities.html"],
        ["In These Times", "http://www.inthesetimes.com/"],
        ["Intelligent Life", "http://www.moreintelligentlife.com/"],
        ["Jacobin", "http://jacobinmag.com/"],
        ["Journal of Democracy", "https://www.journalofdemocracy.org/"],
        ["JSTOR Daily", "http://daily.jstor.org/"],
        ["King's Review", "http://kingsreview.co.uk/"],
        ["Lambda Literary Review", "http://www.lambdaliterary.org/"],
        ["Lapham's Quarterly", "http://www.laphamsquarterly.org/"],
        ["Le Monde Diplo en", "https://mondediplo.com"],
        ["Le Monde Diplo fr", "https://www.monde-diplomatique.fr/"],
        ["Liberties", "https://libertiesjournal.com/"],
        ["Logos", "http://www.logosjournal.com/"],
        ["Maclean's", "http://www.macleans.ca/"],
        ["MIT tech review", "https://www.technologyreview.com/"],
        ["Mosaic", "http://mosaicmagazine.com/"],
        ["Mother Jones", "http://www.motherjones.com/"],
        ["Ms. Magazine", "http://www.msmagazine.com/"],
        ["n+1", "https://nplusonemag.com/"],
        ["National Affairs", "http://nationalaffairs.com/"],
        ["National Interest", "http://www.nationalinterest.org/"],
        ["National Journal", "http://www.nationaljournal.com/njonline/"],
        ["National Review", "http://www.nationalreview.com/"],
        ["Nautilus", "http://nautil.us/"],
        ["New Atlantis", "http://www.thenewatlantis.com/index.html"],
        ["New Criterion", "http://www.newcriterion.com/"],
        ["New English Review", "http://www.newenglishreview.org/"],
        ["New Left Review", "http://www.newleftreview.org/"],
        ["New Republic", "http://www.newrepublic.com/"],
        ["New Scientist", "http://www.newscientist.com/"],
        ["New Statesman", "http://www.newstatesman.com/"],
        ["New York Magazine", "http://www.nymag.com/"],
        ["New York Observer", "https://www.observer.com/"],
        ["New Yorker", "http://newyorker.com/"],
        ["Newsweek", "http://newsweek.com/"],
        ["NY Times Magazine", "https://www.nytimes.com/section/magazine"],
        ["Open Democracy", "http://www.opendemocracy.net/"],
        ["Palladium Magazine", "https://www.palladiummag.com/"],
        ["Paris Review", "http://www.theparisreview.org/"],
        ["Philosophy & Literature", "http://muse.jhu.edu/journals/philosophy_and_literature/toc/phl.33.2.html"],
        ["Philosophy Now", "http://www.philosophynow.org/"],
        ["Plough", "https://www.plough.com/"],
        ["Poetry", "http://www.poetryfoundation.org/poetrymagazine/"],
        ["Poets & Writers", "http://www.pw.org/"],
        ["Project Syndicate", "http://www.project-syndicate.org/"],
        ["Prospect", "http://www.prospectmagazine.co.uk"],
        ["Psychology Today", "http://www.psychologytoday.com"],
        ["Public Discourse", "https://www.thepublicdiscourse.com/"],
        ["Public Domain Review", "https://publicdomainreview.org/"],
        ["Reason", "http://reason.com/"],
        ["Salon", "http://www.salon.com/"],
        ["Scientific American", "http://www.scientificamerican.com/"],
        ["Skeptical Inquirer", "http://www.csicop.org/si/"],
        ["Slate", "http://www.slate.com/"],
        ["Smart Set", "http://thesmartset.com/default.aspx/"],
        ["Smithsonian Magazine", "http://www.smithsonianmag.com/"],
        ["Spiked-Online", "http://www.spiked-online.com/"],
        ["Standpoint", "http://www.standpointmag.co.uk/"],
        ["Technology Review", "http://www.technologyreview.com"],
        ["The American", "http://www.theamerican.com/"],
        ["The Baffler", "http://www.thebaffler.com/"],
        ["The Daily Beast", "http://www.thedailybeast.com/"],
        ["The Dial", "https://www.thedial.world/"],
        ["The Economist", "http://economist.com/"],
        ["The European", "http://www.theeuropean-magazine.com/"],
        ["The Humanist", "http://www.thehumanist.org/"],
        ["The Millions", "http://www.themillions.com/"],
        ["The Nation", "http://www.thenation.com/"],
        ["The New Inquiry", "http://thenewinquiry.com/"],
        ["The Outline", "https://theoutline.com/"],
        ["The Point", "http://thepointmag.com/"],
        ["The Progressive", "http://www.progressive.org/"],
        ["The Spectator", "http://www.spectator.co.uk/"],
        ["The Walrus", "http://www.walrusmagazine.ca/"],
        ["The White Review", "http://www.thewhitereview.org/"],
        ["Threepenny Review", "http://www.threepennyreview.com/"],
        ["Tikkun", "http://www.tikkun.org/"],
        ["Time Magazine", "http://www.time.com/time"],
        ["US News", "http://www.usnews.com"],
        ["Utne Reader", "http://www.utne.com/"],
        ["Village Voice", "http://www.villagevoice.com/"],
        ["Washington Monthly", "http://www.washingtonmonthly.com/"],
        ["Weekly Standard", "http://www.weeklystandard.com/"],
        ["Wilson Quarterly", "http://www.wilsonquarterly.com/"],
        ["Wired", "http://www.wired.com/"],
        ["World Affairs", "http://www.worldaffairsjournal.org/"],
        ["Yale Review", "https://yalereview.yale.edu/"],
        ["American Scholar Books", "http://theamericanscholar.org/dept/book-reviews/"],
        ["Atlantic Books", "http://www.theatlantic.com/culture/category/books/"],
        ["Australian Book Review", "http://www.australianbookreview.com.au/"],
        ["B&N Reads", "https://www.barnesandnoble.com/blog/"],
        ["Bookforum", "http://www.bookforum.com/"],
        ["Boston Globe Books", "http://www.bostonglobe.com/arts/books"],
        ["Chronicle Review", "http://chronicle.com/section/Books/55/"],
        ["Claremont Review", "http://www.claremont.org/claremont-review-of-books/"],
        ["Complete Review", "http://www.complete-review.com/new/new.html"],
        ["CS Monitor Books", "http://www.csmonitor.com/Books/Book-Reviews"],
        ["Denver Post", "http://www.denverpost.com/books"],
        ["Dublin Review", "http://www.drb.ie/"],
        ["Economist Books", "http://www.economist.com/books/"],
        ["Financial Times Books", "https://www.ft.com/arts/books"],
        ["Globe & Mail Books", "http://www.theglobeandmail.com/arts/books-and-media/book-reviews/"],
        ["Guardian Books", "https://www.theguardian.com/books"],
        ["Independent Books", "http://www.independent.co.uk/arts-entertainment/books"],
        ["January Magazine", "http://www.januarymagazine.com"],
        ["Jewish Review of Books", "http://www.jewishreviewofbooks.com/"],
        ["Literary Review", "http://www.literaryreview.co.uk/"],
        ["London Review", "http://www.lrb.co.uk/index.php"],
        ["Los Angeles Review of Books", "http://lareviewofbooks.org/"],
        ["Los Angeles Times", "http://www.latimes.com/features/books/"],
        ["Melbourne Age", "http://www.theage.com.au/entertainment/books/index.html"],
        ["Metapsychology", "http://metapsychology.mentalhelp.net/poc/view_index.php?idx=news"],
        ["New Republic Books", "http://newrepublic.com/tags/books"],
        ["New Statesman Books", "http://www.newstatesman.com/books"],
        ["New York Review", "http://www.nybooks.com/"],
        ["New Yorker Books", "http://feeds.newyorker.com/books/"],
        ["Newsday Books", "http://www.newsday.com/features/booksmags/"],
        ["NY Times Books", "http://www.nytimes.com/pages/books/review/index.html"],
        ["Open Letters", "http://www.openlettersmonthly.com/issue/"],
        ["Public Books", "http://publicbooks.org/"],
        ["Salon Books", "http://www.salon.com/topic/books/"],
        ["Scotsman Books", "http://www.scotsman.com/lifestyle/books"],
        ["SF Chronicle Books", "http://www.sfgate.com/books/"],
        ["Slate Book Review", "http://www.slate.com/topics/s/slate_book_review.html"],
        ["Spectator Books", "http://www.spectator.co.uk/the-critics/books"],
        ["Spiked Books", "http://www.spiked-online.com/reviewofbooks"],
        ["Sydney Review of Books", "https://sydneyreviewofbooks.com/"],
        ["Tablet Books", "http://www.tabletmag.com/category/books/"],
        ["Telegraph Books", "http://www.telegraph.co.uk/culture/books/non_fictionreviews/"],
        ["The Hindu Books", "http://beta.thehindu.com/"],
        ["The Nation Books", "http://www.thenation.com/culture/"],
        ["The TLS", "http://www.the-tls.co.uk/"],
        ["Times Higher Ed Books", "http://www.timeshighereducation.com/academic/books"],
        ["University Bookman", "http://www.kirkcenter.org/index.php/bookman/"],
        ["Washington Post", "http://www.washingtonpost.com/wp-dyn/content/artsandliving/books/index.html"],
        ["Washington Times", "http://www.washingtontimes.com/books/"],
        ["WSJ Books", "http://online.wsj.com/public/page/book-reviews.html"]
      ]

      const randomPage = Math.floor(Math.random() * (urls.length));
         
      const vw = window.screen.width
      const vh = window.screen.height
      
      try {
        const popup: any = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
        popup.focus()
        popup.location = urls[randomPage][1]
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
        <SpeedSelect value={speed} onChange={handleSpeedChange}>
          <Option value="1">1 minute</Option>
          <Option value="2">2 minutes</Option>
          <Option value="3">3 minutes</Option>
          <Option value="4">4 minutes</Option>
          <Option value="6">6 minutes</Option>
          <Option value="8">8 minutes</Option>
        </SpeedSelect>
        <Footer>
          <GithubLink href="https://github.com/jergra/NewsCycle/tree/main" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </GithubLink>
        </Footer>
      </Container>
   )
}

export default NewsCycle;




