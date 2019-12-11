// import { sum } from "./index";
// const summer = require("./GrantList");

import React from "react";
import * as rtl from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { GrantList, addFieldGoal } from "./GrantList";
// import { addFieldGoal } from "./GrantList";
const summer = require("./index");
import { Provider } from 'react-redux';
import { store } from '../../store';

// unit testing

// integration testing
const mockData = [
  {
  amount: 15000,
  amount_notes:
    "$15,000 along with trip to compete in the live pitching finals at the Global Entrepreneurship Summit; grants and mentoring",
  area_focus: "Social Entrepreneurship",
  competition_name: "GIST Tech-I Competition",
  details_last_updated: "2017-08-23T00:00:00.000Z",
  domain_areas:
    "Environment, conservation, water, agriculture, energy, ICT, health",
  early_stage_funding: false,
  geographic_region: "Global",
  id: 1,
  most_recent_application_due_date: null,
  notes:
    "Idea can be an invention, product, service, app, or any combination, or something unique",
  sponsoring_entity: "Global Innovation Through Science and Technology",
  target_entrepreneur_demographic: null,
  type: "Competition",
  website: "http://www.gistnetwork.org/content/gist-tech-i"
}];

test("it renders without crashing", () => {
  const container = rtl.render(
    <Provider store={store}>
      <GrantList data={mockData} />
    </Provider>
  )
});

test("contains grants", () => {
  const container = rtl.render(<Provider store={store}>
    <GrantList data={mockData} />
  </Provider>);

  container.queryAllByText(/grants/i);
});

test('Data to have a property of amount', () => {
  const container = rtl.render(<Provider store={store}>
    <GrantList data={mockData} />
  </Provider>);
  // const tree = JSON.stringify(container);
  expect(mockData[0]).toHaveProperty('amount');

});