# Step 2 – Quantify

Quantifying is about assessing the impact of contributions being praised. The impact is expressed as a numerical value, which is then used to calculate the score of the praise.

This score can later be used to:

- Serve as the base for a monetary or token based reward
- Count the number of active contributors in the community
- Visualize community activity
- Rank contributions in a leaderboard
- Serve as the base for a reputation system - who did what?

## Quantifiers

The Quantifiers are a group of trusted community members that are tasked with performing quantifications. They look at each praise individually and assign a score to it based on guidelines decided by the community as well as their subjective interpretation of the impact of each praise.

How should _facilitating a workgroup meeting_ be scored in comparison to let's say _being welcoming to a new member_? How should _writing a blog post_ be scored in comparison to _tweeting about that same blog post_? These are the kind of questions that the Quantifiers will have to answer.

The quantifiers work asynchronously at their own pace. Each quantifier only needs to process a small amount of praise data, ensuring a manageable workload for a task that otherwise would become overwhelming.

## Avoiding Quantifier bias and collusion

To avoid quantifier bias and collusion, it is important to have a clear set of guidelines that quantifiers can refer to when performing their task. These guidelines should be decided by the community and should be as objective as possible.

In addition to selecting trusted community members as Quantifiers, the Praise system has been designed to make it difficult to manipulate the quantification process.

- Quantifiers are not able to see the scores of other quantifiers. This ensures that they are not influenced by the scoring of others.
- The assignment of quantifiers is done randomly. This ensures that the same quantifiers are not assigned to the same praise receivers over and over.
- Each praise is scored by more than one quantifier. This ensures that the final scores are not influenced by the quantifier's personal bias.
- The pool of quantifiers should be large enough to make it difficult to predict which quantifier is assigned to what praise receiver. This ensures that quantifiers are not able to collude with praise receivers or accept bribes for giving high scores.

## Praise score

Each praise should be scored at least three quantifiers, ideally four. The scores are then averaged to produce the final praise score.

Example:

```
/praise @jessica "for leading amazing sessions sharing awareness about Deep Democracy,
                  error culture and inclusion."

Quantifier     Score
==========     =====
@jonna         3
@james         13
@jane          8
@john          5

Average / final score: 7.25
```

In addition to giving a score, quantifiers can also **dismiss** praise. This is useful when the praise is not relevant to the community or does not provide enough details to be quantified. A praise can also be marked as a **duplicate** if it refers to the same contribution as another praise. In this case the duplicate praise gets a score of 0-100% of the score of the original praise based on system settings.
