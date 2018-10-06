export const state = () => ({
  list: []
});

export const mutations = {
  populate(state, stories) {
    state.stories = stories;
  }
};
