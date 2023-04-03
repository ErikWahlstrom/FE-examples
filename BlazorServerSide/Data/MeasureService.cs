using System;
using BlazorServerSide;

namespace BlazorServerSide.Data
{
    public class MeasureService
    {
        public MeasureService()
        {
            this.MeasureItems = this.measureItems;
        }

        public MeasureItem? SelectedItem { get; set; } = null;
        public MeasureItem[] MeasureItems { get; private set; }

        public void UpdateSelected(MeasureItem newItem)
        {
            this.MeasureItems = this.MeasureItems.Where(x => x != this.SelectedItem).Append(newItem).ToArray();
            this.SelectedItem = newItem;
        }

        private MeasureItem[] measureItems = new[]{
        new MeasureItem(
            new [] {5.6, 5.5, 5.7, 5.0, 5.9, 5.1, 5.6, 5.6},
            "Dimension1",
            4.2,
            6.1,
            5.5,
            0.1),
        new MeasureItem(
            new [] {5.7, 5.5, 5.7, 5.6, 5.9, 5.1, 5.5, 5.6},
            "Dimension2",
            4.5,
            6.5,
            5.5,
            0.1),
        new MeasureItem(
            new [] {5.8, 5.5, 5.7, 5.5, 5.9, 5.1, 5.2, 5.6},
            "DimensionElse",
            4.2,
            6.2,
            5.2,
            0.1),
        new MeasureItem(
            new [] {5.9, 5.5, 5.7, 5.4, 5.9, 5.1, 5.1, 5.6},
            "DimensionDifferent",
            4.4,
            6.4,
            5.4,
            0.1),
        };
        
    }

    public record MeasureItem(
    double[] Values,
    string Name,
    double Max,
    double Min,
    double Average,
    double StandardDeviation);
}




