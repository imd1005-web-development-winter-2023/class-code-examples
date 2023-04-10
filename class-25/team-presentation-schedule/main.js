const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
    const EVENTS_FILE_PATH = "./data/events.json";
    const TEAMS_FILE_PATH = "./data/teams.json";

    const teams = ref([]);
    const events = ref([]);

    // Fetch Events Data
    fetch(EVENTS_FILE_PATH)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        events.value = data;
      });

    // Fetch Teams Data
    fetch(TEAMS_FILE_PATH)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        teams.value = data;
      });

    function teamData(teamName) {
      return teams.value.find((element) => element.name === teamName);
    }

    function formatTime(time) {
      return new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // Vue requires us to return
    // all of the objects
    // that we use in our templates
    return {
      events,
      teams,
      formatTime,
      teamData,
    };
  },
});

app.mount("#app");
