import React, { useEffect, useState } from "react";
import * as rtl from "@testing-library/react";
import GrantSuggestionList from './GrantSuggestionList';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '../../react-auth0-wrapper';
import { ExpansionPanelActions } from "@material-ui/core";

afterEach(rtl.cleanup);

const user = {
    email: 'testuser@email.com',
    email_verified: true,
    sub: `google-oauth2|${process.env.TEST_KEY}`
  }

jest.mock('../../react-auth0-wrapper');

describe('<GrantSuggestionList />', () => {

    beforeEach(() => {
        useAuth0.mockReturnValue({
          isAuthenticated: true,
          user,
          logout: jest.fn(),
          loginWithRedirect: jest.fn()
        })
      })

      

      const mockRowData = {
        id: 15, competition_name: "Food + City Challenge Prize", type: "Competition", area_focus: "Social Entrepreneurship", sponsoring_entity: "University of Texas at Austin"   
      }

      const mockSuggestion = [{id: 95, subject: "test", suggestion: "test", grant_id: 15}]

      const mockSetSuggestion = (mockSuggestion) => {
          const [suggestions, setSuggestions] = useState(mockRowData)
        useEffect(() => {
            setSuggestions(mockSuggestion)
        }, [mockSuggestion])
      }

      it('should render GrantSuggestionList', () => {
          rtl.render (
              <Provider store={store}>
              <Router>
                  <GrantSuggestionList />
              </Router>
              </Provider>
          );
      });

    //   it('should contain text "User Suggestions"', () => {
    //       const { getByTestID } = rtl.render(              
    //       <Provider store={store}>
    //         <Router>
    //             <GrantSuggestionList />
    //         </Router>
    //         </Provider>);
    //       expect(getByTestID('main-list')).toHaveTextContent(/user suggestions/i)
    //   })
});
