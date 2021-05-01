import React,{Component} from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Bilateral Trade Volume, 2013",
    subcaption:
      "A Horizontal Sankey with options to configure the flow representation",
    theme: "fusion",
    orientation: "horizontal",
    linkalpha: 30,
    linkhoveralpha: 60,
    nodelabelposition: "start"
  },
  nodes: [
    {
      label: "Netherlands"
    },
    {
      label: "Canada"
    },
    {
      label: "Belgium"
    },
    {
      label: "Italy"
    },
    {
      label: "Mexico"
    },
    {
      label: "Russia"
    },
    {
      label: "Spain"
    },
    {
      label: "South Korea"
    },
    {
      label: "Germany"
    },
    {
      label: "China"
    },
    {
      label: "European Union"
    },
    {
      label: "Japan"
    },
    {
      label: "United Kingdom"
    },
    {
      label: "United States"
    },
    {
      label: "France"
    },
    {
      label: "Hong Kong"
    },
    {
      label: "Switzerland"
    },
    {
      label: "Austria"
    },
    {
      label: "Sweden"
    }
  ],
  links: [
    {
      from: "Netherlands",
      to: "European Union",
      value: 798744
    },
    {
      from: "Germany",
      to: "European Union",
      value: 1468990
    },
    {
      from: "European Union",
      to: "France",
      value: 745931
    },
    {
      from: "European Union",
      to: "United States",
      value: 660541
    },
    {
      from: "Canada",
      to: "United States",
      value: 594546
    },
    {
      from: "Belgium",
      to: "European Union",
      value: 628796
    },
    {
      from: "China",
      to: "Hong Kong",
      value: 400571
    },
    {
      from: "China",
      to: "United States",
      value: 526454
    },
    {
      from: "European Union",
      to: "United Kingdom",
      value: 520318
    },
    {
      from: "China",
      to: "European Union",
      value: 560536
    },
    {
      from: "Italy",
      to: "European Union",
      value: 539556
    },
    {
      from: "Mexico",
      to: "United States",
      value: 492715
    },
    {
      from: "Russia",
      to: "European Union",
      value: 385778
    },
    {
      from: "Spain",
      to: "European Union",
      value: 365191
    },
    {
      from: "China",
      to: "Japan",
      value: 312062
    },
    {
      from: "European Union",
      to: "Switzerland",
      value: 328609
    },
    {
      from: "South Korea",
      to: "China",
      value: 229073
    },
    {
      from: "European Union",
      to: "Austria",
      value: 244913
    },
    {
      from: "Japan",
      to: "United States",
      value: 206091
    },
    {
      from: "European Union",
      to: "Sweden",
      value: 204849
    },
    {
      from: "Germany",
      to: "United States",
      value: 184287
    }
  ]
};

class SankiDyagram extends Component {
  render() {
    return (
      <ReactFusioncharts
        type="sankey"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default SankiDyagram;