import { Link } from "react-router-dom";

const English = {
  header: {
    links: {
      home: "Home",
      view_acutions: "View Auctions / Ads",
      contact_us: "Contact Us",
      terms: "Terms & Conditions",
      poilcy: "Policy",
      login: "Sign Up",
    },
    searchbar: {
      category: "Category",
      location: "Location",
      search_keyword: "Search Keyword",
    },
  },
  home: {
    about: {
      content: (
        <>
          We welcome you to our website Picky Mango, one of the leading
          international Web based Online Auction Houses. The Auctions remain
          activated for a specific period of time. Within each auction the
          beginning and end date is stated giving the bidder the time frame
          within to submit the bid. All information is available on the{" "}
          <Link to="/auctions">Auctions And Ads List</Link>, The surplus
          property is open to all bidders.
        </>
      ),
    },
    slider: {
      info: "Happening Now",
      title: "New generation Apple headphones",
      category: "Mobile phones and their accessories",
      days: "days",
      hours: "hrs",
      minutes: "mins",
      seconds: "secs",
      button: "View details",
      from: "from",
      to: "to",
      share_token: "Share Token",
      currency: "SAR.",
    },
  },
};

export default English;
