import { gql } from "@apollo/client";

export const QUESTIONS_SUBSCRIPTION = gql`
    subscription questionsSubscription($searchText: String!){
        questions(order_by: {id: desc}, where: {title: {_ilike: $searchText}}){
            id
            title
            options{
                votes_aggregate{
                    aggregate{
                        count
                    }
                }
            }
        }
    }
`