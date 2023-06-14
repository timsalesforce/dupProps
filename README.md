# W-13560767 Signature - 44738591 - F. Hoffmann-La Roche AG - Rexis - Error While accessing Flexipage - 731800491-83626 (2037534035)

Customer observed that a particular user could not load a record, they got a flexipage error panel, and no regions.

## Repro

1. Clone this repo
2. Deploy to org (might have to use --forceoverwrite)
3. If this is a production instance, then enable lightning debug mode for the user (local builds run in dev mode already)
4. Open an Account (might need to create one first)
5. Observe a flexipage error
