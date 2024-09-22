import pandas as pd

data_set_df = pd.read_excel(r"C:\Users\Anisha\Downloads\Problem Statement 2_ Data set.xlsx", sheet_name='Data Set')
threshold_df = pd.read_excel(r"C:\Users\Anisha\Downloads\Problem Statement 2_ Data set.xlsx", sheet_name='Treshold')
data_set_df.dropna(inplace=True)

threshold_df['Low'] = threshold_df['Treshold'].str.extract(r'Low (\d+)').astype(float)
threshold_df['High'] = threshold_df['Treshold'].str.extract(r'High (\d+)').astype(float)

merged_df = pd.merge(data_set_df, threshold_df[['Parameter', 'Low', 'High', 'Probability of Failure']], on='Parameter')

merged_df['Machine_Identifier'] = merged_df['Id'].astype(str) + '_' + merged_df['Machine'].astype(str)

def generate_alerts(data):
    alerts = []
    grouped = data.groupby('Machine_Identifier')

    for machine_identifier, group in grouped:
        for _, row in group.iterrows():
            parameter = row['Parameter']
            value = row['Value']
            low_threshold = row['Low']
            high_threshold = row['High']
            probability_of_failure = row['Probability of Failure']

            if value < low_threshold or value > high_threshold:
                if probability_of_failure == "High":
                    alerts.append(f"ALERT: {parameter} on Machine {machine_identifier} is at HIGH RISK. Immediate attention required.")
                elif probability_of_failure == "Medium":
                    alerts.append(f"CHECK: {parameter} on Machine {machine_identifier} should be repaired soon. Approaching critical levels.")
                else:
                    recommended_action = "refill fuel" if parameter.lower() == "fuel level" else "adjust"
                    alerts.append(f"LOW RISK: {parameter} on Machine {machine_identifier} needs adjustment. Consider to {recommended_action}.")
    
    return alerts

alerts = generate_alerts(merged_df)

import json
print(json.dumps(alerts))  # Convert the alerts list to JSON format
