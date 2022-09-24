import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import moment from "moment";
import "animate.css";
import { Icon } from "@iconify/react";
const Main = () => {
  const [p, setp] = useState("welcome to time quotes generator");
  const [copied, setcopied] = useState(false);
  const quotes = [
    "'The two most powerful warriors are patience and time.' — Leo Tolstoy, War and Peace",
    "'Time is what we want most, but what we use worst.' — William Penn, Fruits of Solitude",
    "'All we have to decide is what to do with the time that is given us.' — J.R.R. Tolkien, The Fellowship of the Ring",
    "'The most precious resource we all have is time.' — Steve Jobs",
    "'Time has a wonderful way of showing us what really matters.' — Margaret Peters",
    "'Time is a created thing. To say ‘I don’t have time’ is to say ‘I don’t want to.’' — Lao Tzu",
    "'No man goes before his time. Unless the boss leaves early.' — Groucho Marx",
    "'Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it, you can never get it back.' — Harvey MacKay",
    "'The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.' — C.S. Lewis",
    "'The bad news is time flies. The good news is you’re the pilot.' — Michael Altshuler",
    "'There’s only one thing more precious than our time and that’s who we spend it on.' — Leo Christopher",
    "'An inch of time is an inch of gold, but you can’t buy that inch of time with an inch of gold.' — Chinese Proverb",
    "'There’s never enough time to do it right, but there’s always enough time to do it over.' — Jack Bergman",
    "'A man who dares to waste an hour of time has not discovered the value of life.' — Charles Darwin",
    "'Time isn’t the main thing. It’s the only thing.' — Miles Davis",
    "'I am not particularly interested in saving time; I prefer to enjoy it.' — Eduardo Galeano",
    "'Time flies over us, but leaves its shadow behind.' — Nathaniel Hawthorne, The Marble Faun",
    "'Time is what keeps everything from happening at once.' — Ray Cummings, The Girl in the Golden Atom",
    "'It’s not that we have little time, but more that we waste a good deal of it.' — Seneca",
    "'I wish I could turn back the clock and find you sooner so I can love you longer.' — Unknown",
    "'Time moves slowly, but passes quickly.' — Alice Walker, The Color Purple",
    "'You will never find time for anything. If you want time, you must make it.' — Charles Buxton",
    "'There’s never enough time to do all the nothing you want.' — 'Calvin and Hobbes' by Bill Watterson",
    "'They always say time changes things, but you actually have to change them yourself.' — Andy Warhol, The Philosophy of Andy Warhol",
    "'Time is a waste of money.' — Oscar Wilde",
    "'Time is a great healer, but a poor beautician.' — Lucille S. Harper",
    "'No measure of time with you will be long enough. But let’s start with forever.' — Stephenie Meyer, Breaking Dawn",
    "'You can’t turn back the clock. But you can wind it up again.' — Bonnie Prudden",
    "'Time and tide wait for no man, but time always stands still for a woman of 30.' — Robert Frost",
    "'Time has no meaning when you’re in love.' — Unknown",
    "'Better three hours too soon than one minute too late.' — William Shakespeare, The Merry Wives of Windsor",
    "'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.' — Sarah Dessen, The Truth About Forever",
    "'There is a time for work and a time for love. That leaves no other time.' — Coco Chanel",
    "'Time is the longest distance between two places.' — Tennessee Williams, The Glass Menagerie",
    "'To live is so startling, it leaves little time for anything else.' — Emily Dickinson",
    "'Lost time is never found again.' — Benjamin Franklin, Poor Richard’s Almanac",
    "'The only reason for time is so that everything doesn’t happen at once.' — Albert Einstein",
    "'Time you enjoy wasted was not time wasted.' — John Lennon",
    "'Time is precious. Make sure you spend it with the right people.' — Unknown",
    "'Who controls the past, controls the future: who controls the present controls the past.' — George Orwell, 1984",
    "'Time, which changes people, does not alter the image we have of them.' — Marcel Proust",
    "'If you judge people, you have no time to love them.' — Mother Teresa",
    "'The few hours I spend with you are worth the thousand hours I spend without you.' — Unknown",
    "'If you spend too much time thinking about a thing, you’ll never get it done.' — Bruce Lee",
    "'Men talk of killing time, while time quietly kills them.' — Dion Boucicault",
    "'Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.' — Roy T. Bennett, The Light in the Heart",
    "'It has been said, 'time heals all wounds.' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.' ― Rose Fitzgerald Kennedy",
    "'It is the time you have wasted for your rose that makes your rose so important.' — Antoine de Saint-Exupéry, The Little Prince",
    "'Time is a very misleading thing. All there is ever, is the now. We can gain experience from the past, but we can't relive it; and we can hope for the future, but we don't know if there is one.' — George Harrison",
    "'Own time, or time will own you.' — Brian Norgard",
    "'Time is a game played beautifully by children.' — Heraclitus, Fragments",
    "'Being with you and not being with you is the only way I have to measure time.' — Jorge Luis Borges",
    "'How did it get so late so soon? It's night before it's afternoon. December is here before it's June. My goodness how the time has flewn. How did it get so late so soon?'— Dr. Seuss, 'How Did it Get So Late So Soon?'",
    "'Time takes it all, whether you want it to or not.' — Stephen King, The Green Mile",
    "'Time can be a greedy thing-sometimes it steals the details for itself.' — Khaled Hosseini, The Kite Runner",
    "'Time is a slippery thing: lose hold of it once, and its string might sail out of your hands forever.' — Anthony Doerr, All The Light We Cannot See",
    "'Clocks slay time... time is dead as long as it is being clicked off by little wheels; only when the clock stops does time come to life.' — William Faulkner, The Sound and the Fury",
    "'It is looking at things for a long time that ripens you and gives you a deeper meaning.' — Vincent Van Gogh",
    "'Punctuality is the thief of time.' — Oscar Wilde, The Picture of Dorian Gray",
    "'With endless time, nothing is special. With no loss or sacrifice, we can’t appreciate what we have.' — Mitch Albom, The Time Keeper",
    "'The wisest are the most annoyed at the loss of time.' — Dante Alighieri",
    "'We shouldn't waste time on things that might happen someday, or maybe even never.' — Colleen Hoover, It Ends With Us",
    "'Time is the most valuable thing that a man can spend.' — Diogenes",
    "'Time itself comes in drops.' — William James",
    "'The main problem with this great obsession for saving time is very simple: you can't save time. You can only spend it. But you can spend it wisely or foolishly.' — Benjamin Hoff, The Tao of Pooh",
    "'Time, as far as my father was concerned, was a gift you gave to other people.' — Michelle Obama, Becoming",
    "'It’s always about timing. If it’s too soon, no one understands. If it’s too late, everyone’s forgotten.' — Anna Wintour",
    "'If one has no time, one has also lost oneself.' — Marc Wittmann, Felt Time",
    "'Every day is a bank account, and time is our currency. No one is rich, no one is poor, we've got hours each.' — Christopher Rice",
    "'Time is a storm in which we are all lost.' — William Carlos Williams",
    "'I don't need time, I need a deadline.' — Duke Ellington",
    "'Each day a day goes by.' — Carlo Goldoni",
    "'The key is in not spending time, but in investing it.' — Stephen R. Covey, The 7 Habits of Highly Effective People",
    "'Time is more value than money. You can get more money, but you cannot get more time.' — Jim Rohn",
    "'We must use time as a tool, not as a couch.' — John F. Kennedy",
    "'Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.' — Thomas Jefferson",
    "'We must use time wisely and forever realize that the time is always ripe to do right.' — Nelson Mandela",
    "'There’s time enough, but none to spare.' – Charles W. Chesnutt",
    "'Time expands, then contracts, all in tune with the stirrings of the heart.' — Haruki Murakami, Kafka on the Shore",
    "'All great achievements require time.' — Maya Angelou",
    "'Time flies. It’s up to you to be the navigator.' — Robert Orben",
    "'Time will explain.' — Jane Austen, Persuasion",
    "'Time and tide wait for no man.' – Geoffrey Chaucer",
    "'Time is a companion that goes with us on a journey.' — Captain Jean-Luc Picard, STAR TREK",
    "'Enjoy life. There’s plenty of time to be dead.' — Hans Christian Andersen",
    "'Time makes more converts than reason.' – Thomas Paine, Common Sense",
    "'As time goes by, you seem to weed out the things that were making your life hard.' — Tom Petty",
    "'Time stays long enough for anyone who will use it.' — Leonardo da Vinci",
    "'The innocent and the beautiful have no enemy but time.' — William Butler Yeats",
    "'The best time to plant a tree was years ago. The second best time is now.' — Chinese Proverb",
    "'Time is the least thing we have of.' — Ernest Hemingway",
    "'Time is long but life is short.' — Stevie Wonder",
    "'There are no secrets that time does not reveal.' — Jean Racine",
    "'Time is the wisest counselor of all.' — Pericles",
    "'You can’t make up for lost time. You can only do better in the future.' — Ashley Ormon",
    "'The way we spend our time defines who we are.' — Jonathan Estrin",
    "'It’s a strange thing, but when you are dreading something, and would give anything to slow down time, it has a disobliging habit of speeding up.' — J.K. Rowling, Harry Potter and the Goblet of Fire",
    "'Whether it’s the best of times or the worst of times, it’s the only time we’ve got.' — Art Buchwald",
    "'The present time has one advantage over every other — it is our own.' — Charles Caleb Colton",
    "'Lack of time is actually lack of priorities.' — Tim Ferriss, Tools of Titans",
    "'We go back and forth between being time’s master and its victim.' — James Gleick",
  ];
  function generate() {
    setp(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  return (
    <div className="bg-slate-400 h-screen w-full flex items-center justify-center flex-col">
      <div className="text-sm md:text-xl text-center ">{p}</div>
      <div className="flex flex-row gap-3">
        <div className="" onClick={() => generate()}>
          <Icon icon="clarity:refresh-line" className="text-center w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div
          onClick={() => {
            setcopied(true);
            setTimeout(() => {
              setcopied(false);
            }, 1000);
            copy(p);
          }}
        >
          <Icon  icon={copied ? "ic:baseline-done-outline" : "akar-icons:copy"} className="w-5 h-5 md:w-6 md:h-6"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
71054;
