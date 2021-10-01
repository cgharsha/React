import react, { useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetails = () => {
  const match = useRouteMatch();    
  const params = useParams();
  console.log(params)
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  const {quoteId} = params

  const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
      sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className='centered'>
        <LoadingSpinner />
    </div>
  }
  if (error) {
    return <p className='centered'>
        {error}
    </p>
  }
  if (!loadedQuote.text) {
    return <h3>No Quote Found!</h3>;
  }
  return (
    <react.Fragment>
      {/* <HighlightedQuote text={quote.text} author={quote.author} /> */}
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </react.Fragment>
  );
};

export default QuoteDetails;
